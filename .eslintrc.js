module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/media-has-caption': 'off',
    'max-len': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-useless-constructor': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
  },
};
