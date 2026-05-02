"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { MessageCircle, X } from "lucide-react";

interface FloatingCTAProps {
  onOpenInquiry: () => void;
}

export function FloatingCTA({ onOpenInquiry }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {!isMinimized && (
        <div className="bg-white border border-black/[0.08] rounded-xl p-4 shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-sm text-[#5F6368]">
              Ready to start your project? Let's talk!
            </p>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-[#9CA3AF] hover:text-[#111111]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={onOpenInquiry}
            className="w-full py-2 px-4 bg-[#0D7377] text-white text-sm font-medium rounded-lg hover:bg-[#0A5A5D] transition-all shadow-md shadow-[#0D7377]/20"
          >
            Get Free Demo
          </button>
        </div>
      )}

      {isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className={cn(
            "w-14 h-14 rounded-full bg-[#0D7377]",
            "flex items-center justify-center shadow-lg shadow-[#0D7377]/25",
            "hover:scale-110 transition-transform"
          )}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}
