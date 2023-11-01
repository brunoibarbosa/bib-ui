import { defaultPropsButton } from "../components";
import { defaultColors } from "../tokens";
import { UIThemeConstructorProps } from "./types";

export const defaultThemeProps = {
  colors: defaultColors,
  typography: {
    fontSize: 16,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  components: {
    Button: {
      defaultProps: defaultPropsButton,
    },
  },
} satisfies UIThemeConstructorProps;
