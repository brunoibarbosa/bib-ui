import { ColorTheme } from "src/theme";

type InputSize = "small" | "default" | "large";
type InputTheme = "dark" | "light";
type InputColor = keyof Pick<
  ColorTheme,
  "orange" | "red" | "yellow" | "green" | "violet" | "blue" | "gray" | "black"
>;

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  color?: InputColor;
  themeMode?: InputTheme;
}
