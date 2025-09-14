module.exports = {
  root: true,
  ignorePatterns: ['**/dist/**', '**/.next/**'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
};
