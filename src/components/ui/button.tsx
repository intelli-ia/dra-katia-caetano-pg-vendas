import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-heading font-semibold transition-all duration-300 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#008538]/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "btn-premium text-[#FFC800] tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_14px_34px_-8px_rgba(0,133,56,0.65)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_44px_-8px_rgba(0,133,56,0.8)] active:translate-y-0.5 active:scale-100",
        outline:
          "border-2 border-[#008538] text-[#008538] tracking-wide hover:bg-[#008538] hover:text-[#FFC800] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(0,133,56,0.45)] active:translate-y-0.5",
        ghost: "text-[#008538] hover:bg-[#008538]/10 active:translate-y-0.5",
      },
      size: {
        default: "px-6 py-3 text-base md:px-8 md:py-3.5 md:text-base",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
