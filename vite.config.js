import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDirectory = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDirectory, "index.html"),
        about: resolve(rootDirectory, "about/index.html"),
        work: resolve(rootDirectory, "work/index.html"),
        notes: resolve(rootDirectory, "notes/index.html"),
        contact: resolve(rootDirectory, "contact/index.html"),
        legacyNotes: resolve(rootDirectory, "notes.html")
      }
    }
  }
});