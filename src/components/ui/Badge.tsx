import { cn } from "@/lib/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "info";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  children,
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-[#F3F4F6] text-[#5F6368] border-black/[0.06]",
    success:
      "bg-[#D1FAE5] text-[#059669] border-[#059669]/20",
    warning:
      "bg-[#FEF3C7] text-[#D97706] border-[#D97706]/20",
    info: "bg-[#DBEAFE] text-[#0D7377] border-[#0D7377]/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
