import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./buttonClasses";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      color = "orange",
      size = "default",
      shape = "default",
      asChild = false,
      asIcon = false,
      fullWidth = false,
      startIcon,
      endIcon,
      children,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const { base: buttonClass, loadingIcon: loadingClass } = buttonVariants({
      variant,
      size,
      color,
      shape,
      asIcon,
      isLoading,
      fullWidth,
    });

    const loadingIcon = <span className={loadingClass()} />;

    const startOrLoadingIcon =
      !disabled && isLoading
        ? loadingIcon
        : startIcon && <div>{startIcon}</div>;

    return (
      <Comp
        className={buttonClass({ className })}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {startOrLoadingIcon}
        {(isLoading && !asIcon) || !isLoading ? (
          <>
            <Slottable>{children}</Slottable>
            {endIcon && <div>{endIcon}</div>}
          </>
        ) : null}
      </Comp>
    );
  }
);

Button.displayName = "Button";
