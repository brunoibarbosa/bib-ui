import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  plugins: [
    react({
			jsxRuntime: "classic",
		}),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "bib-ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
		target: "esnext",
		sourcemap: true,
  },
});