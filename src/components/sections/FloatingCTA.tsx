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
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-sm text-gray-300">
              Ready to start your project? Let's talk!
            </p>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={onOpenInquiry}
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-violet-500 transition-all"
          >
            Get Free Quote
          </button>
        </div>
      )}

      {isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className={cn(
            "w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-violet-600",
            "flex items-center justify-center shadow-lg shadow-blue-500/25",
            "hover:scale-110 transition-transform"
          )}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}
