const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./**/*.liquid'
	],

	theme: {
		screens: {
			'xs': '414px',
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: '1rem',
		},

		extend: {},
	},

	plugins: [
		require('tailwindcss-debug-screens'),
	]
}