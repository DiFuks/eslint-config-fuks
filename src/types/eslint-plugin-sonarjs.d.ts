declare module 'eslint-plugin-sonarjs' {
	import { type TSESLint } from '@typescript-eslint/utils';

	const pluginSonar: {
		configs: {
			recommended: TSESLint.FlatConfig.Config;
		};
	};

	export default pluginSonar;
}
