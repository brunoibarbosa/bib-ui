type ButtonColor =
  | "orange"
  | "red"
  | "yellow"
  | "green"
  | "violet"
  | "blue"
  | "gray"
  | "black";
type ButtonSize = "small" | "default" | "large";
type ButtonVariant = "default" | "transparent" | "text" | "link" | "outline";
type ButtonShape = "default" | "rounded" | "circle";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  asChild?: boolean;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  asIcon?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}
