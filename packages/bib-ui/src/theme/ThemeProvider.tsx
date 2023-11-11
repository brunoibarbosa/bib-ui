"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle, UITheme } from ".";

export interface ThemeProviderProps {
  theme: UITheme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
