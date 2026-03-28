"use client";

import dynamic from "next/dynamic";

const FlowBackground = dynamic(() => import("@/components/canvas/flow-background"), { ssr: false });

export default function ClientFlowBackground() {
  return <FlowBackground />;
}
