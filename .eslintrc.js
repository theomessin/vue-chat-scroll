module.exports = {
  root: true,
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-extra-semi': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  }
};
