import { defineConfig } from "rollup";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const ROOT_PATH = process.cwd();

export default defineConfig({
  input: resolve(ROOT_PATH, "src", "index.ts"),
  output: {
    file: resolve(ROOT_PATH, "dist", "index.js"),
  },
  inlineDynamicImports: true,
  plugins: [typescript(), nodeResolve(), commonjs(), json()],
});
