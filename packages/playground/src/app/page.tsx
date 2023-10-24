"use client";

import { BibUIProvider, Button } from "bib-ui";

export default function Home() {
  return (
    <BibUIProvider
      value={{
        components: {
          Button: {
            defaultProps: {
              color: "blue",
              variant: "link",
            },
          },
        },
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button color="red" shape="rounded" variant="outline">
          Teste
        </Button>
      </main>
    </BibUIProvider>
  );
}
