import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: [resolve(__dirname, "src", "index.ts")],
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
    },
    target: "esnext",
    sourcemap: true,
  },
});
