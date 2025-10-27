import pluginJs from "@eslint/js"
import pluginPerfectionist from "eslint-plugin-perfectionist"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import pluginTsEslint from "typescript-eslint"

export default defineConfig([
  {
    ignores: ["**/.next/**", "**/dist/**"],
  },
  {
    extends: [
      pluginJs.configs["recommended"],
      pluginPerfectionist.configs["recommended-natural"],
      pluginReactHooks.configs.flat["recommended-latest"],
      pluginTsEslint.configs["recommended"],
      pluginUnicorn.configs["all"],
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js: pluginJs,
      react: pluginReact,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-unused-properties": "warn",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-type-error": "off",
      "unicorn/prevent-abbreviations": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
])
