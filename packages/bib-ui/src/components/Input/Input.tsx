"use client";

import { forwardRef } from "react";
import { StyledInput } from "./Input.styled";
import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => <StyledInput {...props} ref={forwardedRef} />
);

Input.displayName = "Input";
