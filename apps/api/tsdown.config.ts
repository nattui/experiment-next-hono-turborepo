import { defineConfig } from "tsdown"

export default defineConfig({
  clean: false,
  dts: true,
  entry: "src/index.ts",
})
