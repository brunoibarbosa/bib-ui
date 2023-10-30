import { UITheme } from "../styles";

export function omitProps<T extends Record<string, any>>(
  props: T,
  propsToOmit: Partial<keyof T>[]
): Partial<T> {
  return Object.entries(props)
    .filter(([propKey]) => !propsToOmit.includes(propKey))
    .reduce<Partial<T>>(
      (filteredProps, [propKey, propValue]) => ({
        ...filteredProps,
        [propKey]: propValue,
      }),
      {}
    );
}

export function getComponentTheme<T extends UITheme>(
  theme: T,
  componentName: keyof T["component"]
) {
  return theme.component[componentName as keyof typeof theme.component];
}
