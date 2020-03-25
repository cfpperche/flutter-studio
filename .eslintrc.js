module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
  rules: {
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-console': 'warn',
    "no-constant-condition": "off",
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-eval': 'error',
    'no-shadow': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    "react/no-unused-prop-types": "off",
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'react/jsx-props-no-spreading': ['off'],
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
