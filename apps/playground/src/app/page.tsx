"use client";

import { Button, UIConfigProvider } from "bib-ui";

export default function Home() {
  return (
    <UIConfigProvider
      value={{
        components: {
          Button: {
            defaultProps: {
              color: "blue",
              variant: "link",
            },
            stylesOverride({ color }) {
              return {
                root: {
                  borderRadius: color === "orange" ? 10 : 20,
                },
              };
            },
          },
        },
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button color="red" shape="rounded" variant="outline">
          Button
        </Button>
      </main>
    </UIConfigProvider>
  );
}
