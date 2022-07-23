import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

const ROOT_PATH = process.cwd();
const resolvePath = (...pathSegments: string[]) =>
  resolve(ROOT_PATH, ...pathSegments);

const srcPath = resolvePath("src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
