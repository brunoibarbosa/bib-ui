import { omit } from "lodash";
import { forwardRef } from "react";
import { InputProps } from "./Input.types";

export const UnstyledInput = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { ...rest } = omit(props, ["size", "themeMode", "color"]);

    return <input {...rest} ref={forwardedRef} />;
  }
);

UnstyledInput.displayName = "Input";
