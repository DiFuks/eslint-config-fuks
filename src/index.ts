import { type TSESLint } from '@typescript-eslint/utils';

import { baseConfig } from './configs/base.js';
import { vitestConfig } from './configs/vitest.js';

const configs = {
	base: baseConfig,
	vitest: vitestConfig,
} satisfies Record<string, TSESLint.FlatConfig.ConfigArray>;

// eslint-disable-next-line import/no-default-export
export default configs;
