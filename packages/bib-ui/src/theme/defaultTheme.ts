import { getDefaultColors } from "../tokens";
import { getDefaultPropsButton } from "./defaultProps";
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
    },
  } satisfies UIThemeConstructorProps);
