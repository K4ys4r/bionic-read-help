import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/bionic-read-help.js",
      name: "bionic-read-help",
      fileName: "bionic-read-help",
    },
  },
  server: {
    port: 8080,
  },
});
