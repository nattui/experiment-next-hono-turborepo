/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  jsonRecursiveSort: true,
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-sort-json"],
  semi: false,
}

export default config
