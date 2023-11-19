import { getDefaultColors } from "../tokens";
import { getDefaultPropsButton, getDefaultPropsInput } from "./defaultProps";
import { PaletteTheme, UIThemeConstructorProps } from "./types";

export const getDefaultThemeProps = ({
  mode,
}: {
  mode: PaletteTheme["mode"];
}) =>
  ({
    palette: {
      mode: "light",
      colors: getDefaultColors(),
    },
    typography: {
      fontSize: 16,
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    components: {
      Button: {
        defaultProps: getDefaultPropsButton(mode),
      },
      Input: {
        defaultProps: getDefaultPropsInput(mode),
      },
    },
  } satisfies UIThemeConstructorProps);
