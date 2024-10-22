import { fixupPluginRules } from '@eslint/compat';
import { type TSESLint } from '@typescript-eslint/utils';

import { compat } from './compat.js';

export const legacyPlugin = (name: string, alias = name): TSESLint.FlatConfig.Plugin => {
	const pluginToFix = compat.plugins(name)[0]?.plugins?.[alias];

	if (!pluginToFix) {
		throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`);
	}

	return fixupPluginRules(pluginToFix) as TSESLint.FlatConfig.Plugin;
};

export const optimizeRegexPlugin = legacyPlugin(`eslint-plugin-optimize-regex`, `optimize-regex`);

export const styledComponentsVarnamePlugin = legacyPlugin(
	`eslint-plugin-styled-components-varname`,
	`styled-components-varname`,
);

export const preferArrowFunctionsPlugin = legacyPlugin(
	`eslint-plugin-prefer-arrow-functions`,
	`prefer-arrow-functions`,
);

export const i18nextPlugin = legacyPlugin(`eslint-plugin-i18next`, `i18next`);
