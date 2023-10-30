import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle, UITheme } from "../../styles";
import { deepMerge } from "../../utils/deepMerge";

type PartialProvider<T> = T extends object
  ? {
      [P in keyof T]?: PartialProvider<T[P]>;
    }
  : T;

export interface UIConfigProviderProps {
  value: PartialProvider<UITheme>;
  children: React.ReactNode;
}

export const UIConfigProvider = ({
  value,
  children,
}: UIConfigProviderProps) => {
  const mergedTheme = deepMerge(defaultTheme, value) as UITheme;
  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
