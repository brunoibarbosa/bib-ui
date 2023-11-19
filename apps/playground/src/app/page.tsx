import { Button, Input } from "bib-ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Button color="violet" variant="link">
        Button
      </Button>
      <div className="my-4" />
      <Input />
    </main>
  );
}
