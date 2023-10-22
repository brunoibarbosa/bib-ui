import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./buttonClasses";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
