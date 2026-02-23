import React from "react";
import { cn } from "../utils/cn";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-500 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50";

    const variants = {
      primary: "bg-emerald-800 text-white hover:text-white shadow-sm",
      secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200",
      glass:
        "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/20",
      outline: "border border-emerald-800/20 text-emerald-800 hover:border-emerald-800/40",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className, "group")}
        {...props}
      >
        {/* Liquid hover effect for primary/glass */}
        {(variant === "primary" || variant === "glass") && (
          <span className="absolute inset-0 w-full h-full bg-emerald-600/20 scale-0 rounded-full opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center" />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
