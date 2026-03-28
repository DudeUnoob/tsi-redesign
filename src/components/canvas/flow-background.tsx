"use client";

import { useEffect, useRef, memo } from "react";
import paper from "paper";

const FlowBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === "undefined") return;

    // Setup paper scope
    paper.setup(canvasRef.current);

    // Create a fluid, organic shape (Ethereal flow)
    const viewCenter = paper.view.center;
    const path = new paper.Path();
    path.fillColor = new paper.Color("#FDFAF3"); // Pristine cream fallback
    
    // We want the background to be #FDFAF3, and the flow to be a very subtle darker cream or umber tint
    // to simulate water on paper
    path.fillColor = new paper.Color(61 / 255, 38 / 255, 0 / 255, 0.03); // earthy umber at 3% opacity

    // How many points for the blob?
    const points = 8;
    const radius = Math.min(paper.view.size.width, paper.view.size.height) * 0.4;
    
    for (let i = 0; i < points; i++) {
        const theta = (Math.PI * 2 * i) / points;
        const pt = new paper.Point(
            viewCenter.x + Math.cos(theta) * radius,
            viewCenter.y + Math.sin(theta) * radius
        );
        path.add(pt);
    }
    path.closed = true;
    path.smooth({ type: 'continuous' });

    let mousePos = viewCenter.clone();

    // Mouse movement
    paper.view.onMouseMove = (event: paper.ToolEvent) => {
        mousePos = event.point;
    };

    // Animation loop
    paper.view.onFrame = (event: { count: number; time: number; delta: number }) => {
      // Rotate the path slowly
      path.rotate(0.05, viewCenter);
      
      // Pull points slightly toward mouse
      for (let i = 0; i < path.segments.length; i++) {
        const segment = path.segments[i];
        
        // Base coordinate with sin wave modulation
        const theta = (Math.PI * 2 * i) / points;
        const sineMod = Math.sin(event.time * 2 + i) * 20;
        
        const targetX = viewCenter.x + Math.cos(theta) * (radius + sineMod);
        const targetY = viewCenter.y + Math.sin(theta) * (radius + sineMod);
        
        // Calculate pull from mouse
        const vectorToMouse = mousePos.subtract(segment.point);
        const dist = vectorToMouse.length;
        
        // Magnet effect if mouse is near
        let magnetForce = new paper.Point(0, 0);
        if (dist < 300) {
            magnetForce = vectorToMouse.multiply(0.05 * (1 - dist / 300));
        }

        // Apply gentle easing back to base + magnet force
        segment.point.x += (targetX - segment.point.x) * 0.02 + magnetForce.x;
        segment.point.y += (targetY - segment.point.y) * 0.02 + magnetForce.y;
      }
      path.smooth({ type: 'continuous' });
    };

    // Handle resize
    paper.view.onResize = () => {
        // Recenter on resize
        path.position = paper.view.center;
    };

    return () => {
      paper.project.clear();
      paper.view.onFrame = null;
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
        style={{ background: "var(--color-neutral)" }}
        data-paper-resize
      />
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
});

FlowBackground.displayName = "FlowBackground";

export default FlowBackground;
