import { RuleSet } from "styled-components/dist/types";
import { ButtonProps } from "../components";
import { UIColorScale, UIColorSolid, UIColorTone } from "../tokens";

interface ColorTheme {
  orange: UIColorScale;
  red: UIColorScale;
  yellow: UIColorScale;
  green: UIColorScale;
  violet: UIColorScale;
  blue: UIColorScale;
  gray: UIColorScale;
  black: UIColorScale;
  transparent: UIColorSolid;
  current: UIColorSolid;
  white: UIColorSolid;
  disabled: UIColorTone;
}

interface FontTheme {
  fontFamily: {
    sans: string;
  };
}

export interface UITheme {
  color: ColorTheme;
  font: FontTheme;
  component: Partial<{
    Button: Partial<{
      defaultProps: Partial<ButtonProps>;
      styleOverride: (props: ButtonProps, theme: UITheme) => RuleSet<object>;
    }>;
  }>;
}
