"use client";

import { Sparkles } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { container: "w-8 h-8", icon: "w-4 h-4", text: "text-lg" },
    md: { container: "w-10 h-10", icon: "w-5 h-5", text: "text-xl" },
    lg: { container: "w-14 h-14", icon: "w-7 h-7", text: "text-2xl" },
  };

  const { container, icon, text } = sizes[size];

  return (
    <div className="flex items-center gap-3 group">
      {/* Logo Icon Container */}
      <div
        className={`
          ${container} rounded-xl flex items-center justify-center
          bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]
          shadow-lg shadow-[#0ea5e9]/30
          group-hover:shadow-xl group-hover:shadow-[#0ea5e9]/40
          group-hover:scale-105
          transition-all duration-300 ease-out
          border border-white/20
        `}
      >
        <Sparkles className={`${icon} text-white`} />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`
              ${text} font-bold tracking-tight
              bg-gradient-to-r from-[#0F172A] to-[#0ea5e9]
              bg-clip-text text-transparent
              group-hover:to-[#0284c7]
              transition-all duration-300
            `}
          >
            BuildXAI
          </span>
          <span className="text-[10px] text-[#475569] tracking-widest uppercase block">
            AI Powered Solutions
          </span>
        </div>
      )}
    </div>
  );
}
