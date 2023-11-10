import { RuleSet } from "styled-components";
import { ButtonProps } from "../components";

export interface UIColorScale {
  DEFAULT: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface UIColorTone {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

export type UIColorSolid = string;

export type UIColor = UIColorScale | UIColorTone | UIColorSolid;

export interface ColorTheme {
  orange: UIColor;
  red: UIColor;
  yellow: UIColor;
  green: UIColor;
  violet: UIColor;
  blue: UIColor;
  gray: UIColor;
  black: UIColor;
  transparent: UIColor;
  current: UIColor;
  white: UIColor;
  disabled: UIColor;
}

export type SpacingTheme = number | ((factor: number) => string | number);

export interface TypographyTheme {
  fontSize: number;
}

export interface ComponentTheme {
  Button: Partial<{
    defaultProps: Partial<ButtonProps>;
    styleOverride: (props: ButtonProps, theme: UITheme) => RuleSet<object>;
  }>;
}

export interface UITheme {
  color: (
    color: keyof ColorTheme,
    selector?: keyof UIColorScale | keyof UIColorTone
  ) => string;
  typography: TypographyTheme;
  spacing: (
    s1: number | "auto",
    s2?: number | "auto",
    s3?: number | "auto",
    s4?: number | "auto"
  ) => string;
  components: Partial<ComponentTheme>;
}

export interface UIThemeConstructorProps {
  colors: ColorTheme;
  spacing: SpacingTheme;
  components: Partial<ComponentTheme>;
  typography: TypographyTheme;
}
