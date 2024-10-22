declare module 'eslint-plugin-prettier/recommended' {
	import { type TSESLint } from '@typescript-eslint/utils';

	const configPrettier: TSESLint.FlatConfig.Config;

	export default configPrettier;
}
