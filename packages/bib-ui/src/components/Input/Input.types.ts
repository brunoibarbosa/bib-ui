type InputSize = "small" | "default" | "large";
type InputTheme = "dark" | "light";

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  themeMode?: InputTheme;
}
