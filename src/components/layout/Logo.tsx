"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex flex-col items-start justify-center transition-opacity hover:opacity-90 ${className || ""}`}>
      {/* Main Wordmark Image */}
      <div className="relative h-7 md:h-8 w-auto flex items-center">
        <Image 
          src="/images/navbar-image.png" 
          alt="BuildXAI" 
          width={180}
          height={40}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
      
      {/* Tagline: Blue color, light weight, small size */}
      <span className="text-[9px] md:text-[10px] text-[#007EA7] font-medium tracking-[0.18em] uppercase mt-1 select-none">
        AI Powered Solutions
      </span>
    </div>
  );
}
