"use client";

import { Button, UIConfigProvider } from "bib-ui";

export default function Home() {
  return (
    <UIConfigProvider value={{}}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button color="violet" shape="rounded" fullWidth>
          TESTE
        </Button>
      </main>
    </UIConfigProvider>
  );
}
