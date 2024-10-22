import { type TSESLint } from '@typescript-eslint/utils';
import configPrettier from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginSonar from 'eslint-plugin-sonarjs';
import * as process from 'node:process';
import tseslint from 'typescript-eslint';

import {
	airbnbConfig,
	airbnbHooksConfig,
	airbnbTypescriptConfig,
	featureSlicedLayersSlicesSlicesConfig,
	storybookConfig,
	testingLibraryReactConfig,
} from '../utils/legacyConfigs.js';
import {
	optimizeRegexPlugin,
	preferArrowFunctionsPlugin,
	styledComponentsVarnamePlugin,
} from '../utils/legacyPlugins.js';

const varsRegexp = `^[a-zA-Z0-9_\\-@\\/\\.{}\\$\\*:]+$`;

export const baseConfig: TSESLint.FlatConfig.ConfigArray = tseslint.config(
	...airbnbConfig,
	...airbnbHooksConfig,
	...airbnbTypescriptConfig,
	...featureSlicedLayersSlicesSlicesConfig,
	pluginPromise.configs[`flat/recommended`],
	pluginSonar.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	configPrettier,
	{
		plugins: {
			'optimize-regex': optimizeRegexPlugin,
			'simple-import-sort': pluginSimpleImportSort,
			'styled-components-varname': styledComponentsVarnamePlugin,
			'prefer-arrow-functions': preferArrowFunctionsPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2021,
				project: `tsconfig.json`,
				tsconfigRootDir: process.cwd(),
				sourceType: `module`,
			},
		},
		settings: {
			react: {
				version: `detect`,
			},
			'import/parsers': {
				espree: [`.js`, `.cjs`, `.mjs`, `.jsx`],
			},
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},
		rules: {
			'import/extensions': [`off`],
			'import/prefer-default-export': [`off`],
			'import/no-default-export': [`error`],
			'react/function-component-definition': [
				`error`,
				{
					namedComponents: `arrow-function`,
				},
			],
			'react/jsx-props-no-spreading': [`off`],
			'react/require-default-props': [`off`],
			'react/jsx-key': [`error`],
			'no-restricted-syntax': [`error`, `ForInStatement`, `LabeledStatement`, `WithStatement`],
			'no-plusplus': [`off`],
			'no-void': [
				`error`,
				{
					allowAsStatement: true,
				},
			],
			'func-names': [`warn`, `as-needed`, { generators: `never` }],
			curly: [`error`, `all`],
			'@typescript-eslint/no-use-before-define': [`error`, { functions: false, classes: false }],
			'simple-import-sort/imports': [
				`error`,
				{
					groups: [
						[`^react`, `^@?\\w`],
						[`^(app|features|shared|processes|entities|pages)(/.*|$)`, `^\\.`],
					],
				},
			],
			'optimize-regex/optimize-regex': `warn`,
			'@typescript-eslint/no-magic-numbers': [
				`warn`,
				{
					ignoreNumericLiteralTypes: true,
					ignoreEnums: true,
					enforceConst: true,
					ignoreReadonlyClassProperties: true,
					ignore: [-1, 0, 1],
				},
			],
			'@typescript-eslint/quotes': [`error`, `backtick`],
			'newline-before-return': `error`,
			'react/self-closing-comp': [
				`error`,
				{
					component: true,
					html: true,
				},
			],
			'react/no-unstable-nested-components': [`error`, { allowAsProps: true }],
			'prettier/prettier': [
				`error`,
				{
					printWidth: 120,
					tabWidth: 4,
					useTabs: true,
					semi: true,
					singleQuote: true,
					jsxSingleQuote: true,
					trailingComma: `all`,
					bracketSpacing: true,
					jsxBracketSameLine: false,
					arrowParens: `avoid`,
				},
				{ usePrettierrc: false },
			],
			'styled-components-varname/varname': [
				`error`,
				{
					tagStyle: {
						suffix: `Styled`,
					},
				},
			],
			'import/no-extraneous-dependencies': [
				`error`,
				{
					devDependencies: true,
				},
			],
			'import/no-cycle': [`error`],
			'arrow-body-style': [`error`, `as-needed`],
			'sonarjs/no-nested-template-literals': [`off`],
			'sonarjs/cognitive-complexity': [`error`],
			'promise/prefer-await-to-then': [`error`],
			'prefer-arrow-functions/prefer-arrow-functions': `error`,
			'no-param-reassign': [`error`, { props: false }],
			'react/react-in-jsx-scope': [`off`],
			'no-console': [`error`, { allow: [`warn`, `error`] }],
			'consistent-return': [`off`],
			'import/order': [`off`],
			'@typescript-eslint/no-misused-promises': [
				`error`,
				{
					checksVoidReturn: {
						attributes: false,
						returns: false,
					},
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				`error`,
				{
					fixStyle: `inline-type-imports`,
				},
			],
			'@typescript-eslint/explicit-function-return-type': [
				`error`,
				{
					allowExpressions: true,
				},
			],
			'@typescript-eslint/no-floating-promises': [
				`error`,
				{
					ignoreIIFE: true,
					ignoreVoid: true,
				},
			],
			'@typescript-eslint/no-unnecessary-condition': [`error`],
			'@typescript-eslint/no-unused-vars': [`error`, { argsIgnorePattern: `^_`, ignoreRestSiblings: true }],
			'@typescript-eslint/no-empty-object-type': [`error`],
			'@typescript-eslint/naming-convention': [
				`error`,
				{
					selector: `default`,
					format: null,
					custom: {
						regex: varsRegexp,
						match: true,
					},
				},
				{
					selector: `variable`,
					format: [`camelCase`, `PascalCase`, `UPPER_CASE`],
				},
			],
			'react/prop-types': [`off`],
			'no-implicit-coercion': [`error`, { disallowTemplateShorthand: true, allow: [`!!`] }],
		},
	},
	{
		files: [`**/*.js`, `**/*.jsx`],
		...tseslint.configs.disableTypeChecked,
		rules: {
			'id-match': [`error`, varsRegexp, { properties: true, classFields: true }],
			'@typescript-eslint/explicit-function-return-type': `off`,
			...tseslint.configs.disableTypeChecked.rules,
		},
	},
	...testingLibraryReactConfig.map(config => ({
		...config,
		files: [`**/*.spec.ts`, `**/*.spec.tsx`, `**/*.test.ts`, `**/*.test.tsx`, `**/dsl/**`],
	})),
	{
		files: [`**/*.spec.ts`, `**/*.spec.tsx`, `**/*.test.ts`, `**/*.test.tsx`, `**/dsl/**`],
		rules: {
			'testing-library/prefer-user-event': [`error`],

			'no-shadow': `off`,
			'max-classes-per-file': `off`,

			'@typescript-eslint/no-magic-numbers': `off`,
			'@typescript-eslint/indent': `off`,
			'@typescript-eslint/explicit-function-return-type': `off`,
			'@typescript-eslint/member-ordering': `off`,
			'@typescript-eslint/no-non-null-assertion': `off`,
			'@typescript-eslint/no-empty-function': `off`,
			'@typescript-eslint/no-unsafe-argument': `off`,

			'sonarjs/no-duplicate-string': `off`,
			'sonarjs/no-identical-functions': `off`,
		},
	},
	{
		files: [`**/*.json`],
		...tseslint.configs.disableTypeChecked,
		rules: {
			'no-unused-expressions': `off`,
			'sonarjs/no-duplicate-string': `off`,
			quotes: `off`,
			'no-template-curly-in-string': `off`,
			'@typescript-eslint/quotes': `off`,
			'@typescript-eslint/no-unused-expressions': `off`,
			...tseslint.configs.disableTypeChecked.rules,
		},
	},
	{
		files: [
			`vite.config.ts`,
			`vite.config.js`,
			`vite.config.override.ts`,
			`eslint.config.js`,
			`**/*.d.ts`,
			`**/*.stories.ts`,
			`**/*.stories.tsx`,
		],
		rules: {
			'import/no-default-export': `off`,
		},
	},
	...storybookConfig.map(config => ({
		...config,
		files: [`**/*.stories.ts`, `**/*.stories.tsx`],
	})),
	{
		files: [`**/*.stories.ts`, `**/*.stories.tsx`],
	},
	{
		ignores: [`**/dist/**`, `.yarn/**`, `storybook-static/**`],
	},
);
