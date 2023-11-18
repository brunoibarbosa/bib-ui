import { ButtonProps } from "../components";
import { PaletteTheme } from "./types";

export function getDefaultPropsButton(
  mode: PaletteTheme["mode"]
): Partial<ButtonProps> {
  return {
    variant: "default",
    color: "orange",
    size: "default",
    shape: "default",
    asChild: false,
    asIcon: false,
    fullWidth: false,
    isLoading: false,
    themeMode: mode,
  };
}
