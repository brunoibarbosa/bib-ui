"use client";

import { Button, ThemeProvider, createTheme } from "bib-ui";

const myTheme = createTheme({
  colors: {
    violet: "#11c290",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button color="violet" variant="default">
          TESTE
        </Button>
      </main>
    </ThemeProvider>
  );
}
