import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig([
	{
		ignores: ['**/node_modules/', '**/public/', '**/build/', '**/dist/'],
	},
	{
		files: ['**/*.{js,ts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
		},
		plugins: { js, react, jsxA11y, 'react-hooks': reactHooks, 'react-refresh': reactRefresh, prettier },
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			jsxA11y.flatConfigs.recommended,
			react.configs.flat.recommended,
			react.configs.flat['jsx-runtime'],
		],
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	},
]);
