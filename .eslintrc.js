module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // add your custom rules here
  rules: {
    indent: [1, 2],
    quotes: [1, 'single'],
    semi: [1, 'never'],
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'space-before-function-paren': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'sort-keys': [0, 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],
    'vue/attributes-order': [
      2,
      {
        alphabetical: true
      }
    ],
    'vue/no-vue-html': 0,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ]
  },
  overrides: [
    {
      files: [''], // *filename
      rules: {
        'eslint-disable-file': 'off'
      }
    }
  ]
}