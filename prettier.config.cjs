/** @type {import("prettier").Config} */
const config = {
  $schema: 'https://json.schemastore.org/prettierrc',
  overrides: [
    {
      files: ['*.vue'],
      excludeFiles: [],
      options: {
        trailingComma: 'none',
        singleAttributePerLine: true,
        parser: 'vue',
      },
    },
    {
      files: ['./src/utils/RegExp.ts'],
      options: {
        singleAttributePerLine: true,
        printWidth: 1000,
      },
    },
  ],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
  bracketSpacing: false,
  useTabs: false,
}
module.exports = config
