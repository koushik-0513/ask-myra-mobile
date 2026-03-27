/**
 * Prettier configuration
 * @type {import('prettier').Config}
 */
const config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'none',
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['/.*ClassName$/'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        plugins: [
          '@ianvs/prettier-plugin-sort-imports',
          'prettier-plugin-tailwindcss'
        ],
        importOrder: [
          '<BUILTIN_MODULES>',
          '^react$',
          '^next$',
          '^express(.*)$',
          '',
          '<THIRD_PARTY_MODULES>',
          '',
          '^@sales-os/(.*)$',
          '',
          '^@/(.*)$',
          '',
          '^../(.*)$',
          '^./(.*)$'
        ],
        tailwindAttributes: ['myClassList', '/data-.*/', '/.*ClassName$/'],
        tailwindFunctions: ['clsx', 'cn', 'cva']
      }
    },
    {
      files: '*.md',
      options: {
        plugins: ['prettier-plugin-tailwindcss']
      }
    }
  ]
}

export default config
