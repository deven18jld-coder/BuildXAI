"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[#111111] mb-1.5">
            {label}
            {props.required && <span className="text-[#DC2626] ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 bg-white border border-black/[0.08] rounded-lg",
            "text-[#111111] placeholder-[#9CA3AF] resize-none",
            "focus:outline-none focus:ring-2 focus:ring-[#0D7377]/20 focus:border-[#0D7377]/50",
            "transition-all duration-200",
            error && "border-[#DC2626]/50 focus:border-[#DC2626]/50 focus:ring-[#DC2626]/20",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[#DC2626]">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
