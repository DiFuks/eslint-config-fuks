import { type TSESLint } from '@typescript-eslint/utils';

import { compat } from './compat.js';
import { legacyPlugin } from './legacyPlugins.js';

const extendsConfig = (name: string): TSESLint.FlatConfig.Config[] =>
	compat.extends(name) as TSESLint.FlatConfig.Config[];

const legacyConfigPlugins = (
	configs: TSESLint.FlatConfig.Config[],
	plugins: Array<[name: string, alias: string]>,
): TSESLint.FlatConfig.Config[] =>
	configs.map(config => {
		const newPlugins = plugins.reduce((acc, [name, alias]) => {
			const plugin = config.plugins?.[alias] ? legacyPlugin(name, alias) : undefined;

			return plugin ? { ...acc, [alias]: plugin } : acc;
		}, {});

		return {
			...config,
			plugins: {
				...config.plugins,
				...newPlugins,
			},
		};
	});

export const airbnbConfig = legacyConfigPlugins(extendsConfig(`airbnb`), [[`eslint-plugin-import`, `import`]]);

export const airbnbHooksConfig = legacyConfigPlugins(extendsConfig(`airbnb/hooks`), [
	[`eslint-plugin-react-hooks`, `react-hooks`],
]);

export const airbnbTypescriptConfig = extendsConfig(`airbnb-typescript`);

export const featureSlicedLayersSlicesSlicesConfig = extendsConfig(`@feature-sliced/eslint-config/rules/layers-slices`);

export const testingLibraryReactConfig = legacyConfigPlugins(extendsConfig(`plugin:testing-library/react`), [
	[`eslint-plugin-testing-library`, `testing-library`],
]);

export const storybookConfig = legacyConfigPlugins(extendsConfig(`plugin:storybook/recommended`), [
	[`eslint-plugin-storybook`, `storybook`],
]);
