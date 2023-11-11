import type { Preview } from "@storybook/react";
import { UIConfigProvider, createTheme } from "bib-ui";
import React from "react";

const myTheme = createTheme({});

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
  },
  decorators: [
    (Story) => (
      <UIConfigProvider theme={myTheme}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Story />
        </div>
      </UIConfigProvider>
    ),
  ],
};

export default preview;
