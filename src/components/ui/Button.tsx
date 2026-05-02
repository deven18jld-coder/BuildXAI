"use client";

import { cn } from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F8F5F0] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#0ea5e9] text-white hover:bg-[#0284c7] focus:ring-[#0ea5e9] shadow-md shadow-[#0ea5e9]/20",
    secondary:
      "bg-white text-[#111111] hover:bg-[#FAFAF8] focus:ring-[#0D7377] border border-black/[0.08] shadow-sm",
    outline:
      "border-2 border-black/[0.08] text-[#111111] hover:border-[#0D7377]/30 hover:text-[#0D7377] focus:ring-[#0D7377] bg-white shadow-sm",
    ghost:
      "text-[#5F6368] hover:text-[#0D7377] hover:bg-black/[0.03] focus:ring-[#0D7377]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5 mr-2 -ml-1" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5 ml-2 -mr-1" />
      )}
    </button>
  );
}
