module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        // vue devs don't use prettier?
        // https://github.com/vuejs/vue-cli/issues/2920#issuecomment-438230932
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    // Globals
    globals: {
        google: 'readonly'
    },
    // required to lint *.vue files
    plugins: [
        '@typescript-eslint',
        'import',
        'vue'
    ],
    // add your custom rules here
    rules: {
        'mno-triple-slash-reference': false,
        'nuxt/no-cjs-in-config': 'off',
        '@typescript-eslint/camelcase': [1, { properties: 'never' }],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/interface-name-prefix': [2, 'always'],
        '@typescript-eslint/member-delimiter-style': [2, { multiline: { delimiter: 'none' }}],
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-triple-slash-reference': 2,
        '@typescript-eslint/no-non-null-assertion': 0,
        "@typescript-eslint/no-var-requires": 0,
        'arrow-parens': [2, 'as-needed'],
        'brace-style': [2, 'stroustrup'],
        'comma-dangle': [2, 'never'],
        'curly': [2, 'all'],
        'import/order': [2, { 'newlines-between': 'never' }],
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'max-len': [1, {
            'code': 120,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true
        }],
        'new-parens': 2,
        'no-console': [1, { allow: ['warn', 'error', 'info'] }],
        'no-irregular-whitespace': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-trailing-spaces': 2,
        'no-unused-expressions': 2,
        'no-undef-init': "error",
        'no-var': 2,
        'object-shorthand': 2,
        'object-curly-newline': [2, {
            'ObjectExpression': { 'multiline': true, 'minProperties': 4, 'consistent': true },
            'ImportDeclaration': 'never',
            'ExportDeclaration': 'never'
        }],
        'object-curly-spacing': [2, 'always'],
        'one-var-declaration-per-line': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'quotes': [2, 'single'],
        'require-atomic-updates': 0,
        'semi': [2, 'never'],
        'space-before-function-paren': [2, 'always'],
        'vue/html-indent': [2, 4],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 1,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }]
    }
}
