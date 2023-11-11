"use client";

import { ThemeProvider as UIThemeProvider, createTheme } from "bib-ui";

const myTheme = createTheme({
  components: {
    Button: {
      defaultProps: {
        shape: "rounded",
      },
    },
  },
});

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UIThemeProvider theme={myTheme}>{children}</UIThemeProvider>;
}
