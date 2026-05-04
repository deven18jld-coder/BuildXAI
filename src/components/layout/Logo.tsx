"use client";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 transition-opacity hover:opacity-90 ${className}`}>
      <img 
        src="/images/logo-ico.png" 
        alt="BuildXAI icon" 
        className="h-9 w-9 object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-gray-900">Build</span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            XAI
          </span>
        </span>
        <span className="text-[10px] text-gray-500 tracking-wide uppercase">
          AI POWERED SOLUTIONS
        </span>
      </div>
    </div>
  );
}
