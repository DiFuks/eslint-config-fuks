import { type TSESLint } from '@typescript-eslint/utils';
import vitest from 'eslint-plugin-vitest';

export const vitestConfig: TSESLint.FlatConfig.ConfigArray = [
	{
		files: [`**/*.spec.ts`, `**/*.spec.tsx`, `**/dsl/**`],
		...vitest.configs.recommended,
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/no-disabled-tests': `error`,
			'vitest/no-focused-tests': `error`,
			'vitest/no-conditional-expect': `error`,
			'vitest/no-conditional-tests': `error`,
			'vitest/valid-expect': [
				`error`,
				{
					maxArgs: 2,
				},
			],
		},
	},
];
