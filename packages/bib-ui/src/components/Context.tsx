import { ThemeProvider } from "styled-components";
import { GlobalStyle, UITheme } from "../theme";

export interface UIConfigProviderProps {
  theme: UITheme;
  children: React.ReactNode;
}

export const UIConfigProvider = ({
  theme,
  children,
}: UIConfigProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
