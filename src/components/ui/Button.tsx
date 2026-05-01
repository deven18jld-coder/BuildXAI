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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 focus:ring-blue-500 shadow-lg shadow-blue-500/25",
    secondary:
      "bg-gray-800 text-gray-100 hover:bg-gray-700 focus:ring-gray-500 border border-gray-700",
    outline:
      "border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white focus:ring-gray-500 bg-transparent",
    ghost:
      "text-gray-400 hover:text-white hover:bg-gray-800/50 focus:ring-gray-500",
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
