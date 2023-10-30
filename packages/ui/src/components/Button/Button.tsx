import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { omitProps } from "../../utils";
import { ButtonProps } from "./Button.types";
import { LoadingIcon } from "./LoadingIcon.styled";

export const defaultPropsButton: Partial<ButtonProps> = {
  variant: "default",
  color: "orange",
  size: "default",
  shape: "default",
  asChild: false,
  asIcon: false,
  fullWidth: false,
  isLoading: false,
};

export const UnstyledButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      asIcon,
      startIcon,
      endIcon,
      children,
      isLoading,
      disabled,
      ...rest
    } = omitProps(props, ["fullWidth", "shape", "size", "color", "variant"]);

    const Comp = asChild ? Slot : "button";

    const startOrLoadingIcon =
      !disabled && isLoading ? (
        <LoadingIcon />
      ) : (
        startIcon && <div>{startIcon}</div>
      );

    return (
      <Comp disabled={disabled} {...rest} ref={ref}>
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

UnstyledButton.displayName = "Button";
