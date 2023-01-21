// docs/vite.config.ts or docs/vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
        "mermaid": "mermaid/dist/mermaid.esm.mjs",
    },
  },
  base: '/reduce-website/'
});
