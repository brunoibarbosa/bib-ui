import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ThemeProvider, createTheme } from "bib-ui";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
      stylePreview: true,
    },
  },
  decorators: [
    (Story) => {
      const isDarkMode = useDarkMode();
      const myTheme = createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      });

      return (
        <ThemeProvider theme={myTheme}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              padding: "1rem",
              backgroundColor: isDarkMode ? "#222425" : "white",
              borderRadius: 5,
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
