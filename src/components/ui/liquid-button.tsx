"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function LiquidButton({ children, className, icon, ...props }: LiquidButtonProps) {
  return (
    <button
      className={cn(
        "relative rounded-full p-[1px] overflow-hidden group hover:scale-[0.98] transition-transform active:scale-95",
        className
      )}
      {...props}
    >
      {/* Liquid Gold Conic Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FDFAF3_0%,#B8A375_50%,#FDFAF3_100%)] blur-[4px]" />
      
      {/* Specular highlight reflecting light */}
      <span className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-white opacity-80 z-20 mix-blend-overlay blur-[2px]" />
      
      {/* Inner Soft UI pill */}
      <div className="liquid-button-inner relative flex items-center gap-3 px-8 py-4 font-medium text-sm text-primary tracking-wide">
        {children}
        {icon && (
          <span className="group-hover:translate-x-1 transition-transform">
            {icon}
          </span>
        )}
      </div>
    </button>
  );
}
