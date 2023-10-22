import { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./buttonClasses";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
