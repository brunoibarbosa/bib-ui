import { merge } from "lodash";
import { getDefaultThemeProps } from "./defaultTheme";
import { UIThemeModel } from "./model";
import { UITheme, UIThemeConstructorProps } from "./types";

type PartialTheme<T> = T extends object
  ? {
      [P in keyof T]?: PartialTheme<T[P]>;
    }
  : T;

export function createTheme(
  props: PartialTheme<UIThemeConstructorProps>
): UITheme {
  const theme = new UIThemeModel(
    merge(getDefaultThemeProps({ mode: props.palette?.mode ?? "light" }), props)
  );
  return Object.create(theme);
}
