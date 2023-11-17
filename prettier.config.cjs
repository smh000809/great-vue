/** @type {import("prettier").Config} */
const config = {
  $schema: 'https://json.schemastore.org/prettierrc',
  overrides: [
    {
      files: ['*.vue'],
      excludeFiles: [],
      options: {
        trailingComma: 'none',
        singleAttributePerLine: false,
        parser: 'vue',
      },
    },
    {
      files: ['./src/utils/RegExp.ts'],
      options: {
        printWidth: 1000,
      },
    },
  ],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 180,
  bracketSpacing: false,
  useTabs: false,
  arrowParens: 'avoid',
}
module.exports = config
