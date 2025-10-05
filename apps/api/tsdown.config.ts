import { defineConfig } from "tsdown"

export default defineConfig({
  dts: {
    emitDtsOnly: true
  },
  entry: "src/app.ts",
})
