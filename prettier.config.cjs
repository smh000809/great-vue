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
    {
      files: ['./tsconfig.json', './tsconfig.*.json', './src/main.ts', './vite.config.*'],
      options: {
        printWidth: 80,
      },
    },
  ],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 180,
  useTabs: false,
  arrowParens: 'avoid',
}
module.exports = config
