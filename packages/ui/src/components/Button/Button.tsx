import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { deepMerge, getComponentProps, getComponentStyle } from "../../utils";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./buttonClasses";

const defaultProps = {
  variant: "default",
  color: "orange",
  size: "default",
  shape: "default",
  asChild: false,
  asIcon: false,
  fullWidth: false,
  isLoading: false,
} satisfies Partial<ButtonProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const contextAndInvokedProps = getComponentProps("Button", props);

    const mergedProps: ButtonProps = deepMerge(
      defaultProps,
      contextAndInvokedProps
    );

    const contextStyles = getComponentStyle("Button", mergedProps);
    const rootStyles = contextStyles ? contextStyles.root : {};

    const {
      className,
      variant,
      color,
      size,
      shape,
      asChild,
      asIcon,
      fullWidth,
      startIcon,
      endIcon,
      children,
      isLoading,
      disabled,
      ...rest
    } = mergedProps;

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
        style={rootStyles}
        {...rest}
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
