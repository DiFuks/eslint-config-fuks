module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'prefer-arrow',
    'styled-components-varname',
    'jsdoc',
    'no-relative-imports',
    'i18next',
  ],
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:i18next/recommended',
    'prettier',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-unresolved': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        tabWidth: 2,
        jsdocSingleLineComment: false,
        // eslint-disable-next-line global-require
        plugins: [require('prettier-plugin-jsdoc')],
      },
      { usePrettierrc: false },
    ],
    'styled-components-varname/varname': [
      'error',
      {
        extendedStyle: {
          prefix: 'S',
        },
        tagStyle: {
          prefix: 'S',
        },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prefer-top-level-await': ['off'],
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['internal', 'parent'],
          ['index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': ['error', { ignoreExpressions: true }],
    'class-methods-use-this': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 'off',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-console': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['draft'],
        ignorePropertyModificationsForRegex: ['Draft$'],
        props: true,
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-await-in-loop': 'off',
    'promise/prefer-await-to-then': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': ['error'],
    'react/self-closing-comp': ['error'],
    'unicorn/numeric-separators-style': [
      'error',
      {
        number: {
          groupLength: 3,
          minimumDigits: 0,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'unicorn/no-null': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'jsdoc/multiline-blocks': [
      'error',
      {
        noSingleLineBlocks: true,
      },
    ],
    'jsdoc/newline-after-description': ['error'],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        newlineBeforeCapsAssumesBadSentenceEnd: true,
      },
    ],
    'jsdoc/require-throws': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        checkConstructors: false,
        contexts: [
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSEnumDeclaration',
          'TSMethodSignature',
          'ExportDefaultDeclaration',
          'ExportNamedDeclaration[declaration][declaration.declarations.0.id.name!="getServerSideProps"][declaration.type!="ClassDeclaration"]',
          'PropertyDefinition:not([accessibility="private"])',
          'MethodDefinition:not([accessibility="private"])',
          'ClassProperty:not([accessibility="private"])',
        ],
        publicOnly: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        custom: {
          match: true,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: ['interface'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        custom: {
          match: true,
          regex: '^[TI][A-Z]',
        },
        format: ['PascalCase'],
        selector: ['typeAlias'],
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        allow: ['name'],
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'no-relative-imports/no-relative-imports': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowDirectConstAssertionInArrowFunctions: true,
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'signature',
              'public-decorated-field',
              'public-field',
              'protected-decorated-field',
              'protected-field',
              'private-decorated-field',
              'private-field',
              'constructor',
              'public-decorated-get',
              'public-get',
              'protected-decorated-get',
              'protected-get',
              'private-decorated-get',
              'private-get',
              'public-decorated-set',
              'public-set',
              'protected-decorated-set',
              'protected-set',
              'private-decorated-set',
              'private-set',
              'public-decorated-method',
              'public-method',
              'protected-decorated-method',
              'protected-method',
              'private-decorated-method',
              'private-method',
            ],
          },
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/return-await': 'off',
        'react/jsx-filename-extension': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            trailingComma: 'all',
            jsxSingleQuote: true,
            tabWidth: 2,
            jsdocSingleLineComment: false,
            plugins: ['prettier-plugin-jsdoc'],
          },
          {
            usePrettierrc: false,
          },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
    {
      files: ['*.json'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/filename-case': 'off',
        quotes: 'off',
      },
    },
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['*.fixture.tsx'],
      rules: {
        'react/function-component-definition': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        'jsdoc/require-jsdoc': ['off'],
        'i18next/no-literal-string': ['off'],
      },
    },
  ],
};
