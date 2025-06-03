/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
	semi: true,
	tabWidth: 4,
	printWidth: 120,
	singleQuote: true,
	trailingComma: 'all',

	overrides: [
		{
			files: ['*.css', '*.sass', '*.scss'],
			options: {
				singleQuote: false,
			},
		},
	],
};
