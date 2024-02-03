module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        quotes: 'off',
        'linebreak-style': 'off',
        'no-else-return': 'off',
        'comma-dangle': 'off',
        'no-unused-vars': 'off',
        'no-underscore-dangle': 'off',
        indent: 'off',
        'no-console': 'off',
        camelcase: 'off',
    },
};
