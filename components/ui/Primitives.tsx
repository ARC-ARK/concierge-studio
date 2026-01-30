import React from "react";
import { cn } from "@/lib/utils";

// Button
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: "bg-white text-black hover:bg-gray-200 border-transparent",
      secondary: "bg-surface border border-white/10 text-white hover:border-violet-500/50 hover:bg-white/5",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
      ghost: "bg-transparent text-gray-400 hover:text-white"
    };
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Card
export const Card = ({ className, children, hoverEffect = false }: { className?: string, children: React.ReactNode, hoverEffect?: boolean }) => (
  <div className={cn(
    "rounded-xl border border-white/5 bg-surface/50 p-6 backdrop-blur-sm",
    hoverEffect && "transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)] hover:-translate-y-1",
    className
  )}>
    {children}
  </div>
);

// Badge
export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-300 border border-white/10", className)}>
    {children}
  </span>
);

// Input
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

// Textarea
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50 resize-y",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
