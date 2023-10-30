import { defaultPropsButton } from "../components";
import { colors, font } from "../tokens";
import { UITheme } from "./theme";

export const defaultTheme = {
  color: colors,
  font,
  component: {
    Button: {
      defaultProps: defaultPropsButton,
    },
  },
} satisfies Partial<UITheme>;
