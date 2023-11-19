"use client";

import { forwardRef } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => <StyledButton {...props} ref={forwardedRef} />
);

Button.displayName = "Button";
