module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'newline-per-chained-call': 'off',
    'global-require': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-param-reassign': [2, { props: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-spacing': [2, 'always'],
    'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true } }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    indent: ['error', 2],
    'max-len': ['error', 200],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.unit.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
