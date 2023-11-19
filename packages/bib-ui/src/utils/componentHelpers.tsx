import { UITheme } from "../theme";

export function getComponentTheme<
  T extends UITheme,
  C extends keyof T["components"]
>(theme: T, componentName: C) {
  return theme.components[
    componentName as keyof typeof theme.components
  ] as T["components"][C];
}
