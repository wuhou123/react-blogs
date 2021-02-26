module.exports = {
  semi: false, //语句末尾是否有分号
  singleQuote: true,
  tabWidth: 2,
  arrowParens: 'avoid',
  jsxBracketSameLine: true,
  trailingComma: 'all',
  printWidth: 80,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
