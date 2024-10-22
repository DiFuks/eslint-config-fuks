declare module 'eslint-plugin-promise' {
	import { type TSESLint } from '@typescript-eslint/utils';

	const plugin: {
		configs: {
			'flat/recommended': TSESLint.FlatConfig.Config;
		};
	};

	export default plugin;
}
