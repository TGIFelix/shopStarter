const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: {
		enabled: false,
		content: [
			'./layout/*.liquid',
			'./templates/*.liquid',
			'./sections/*.liquid',
			'./snippets/*.liquid',
		],
	},
	darkMode: 'media',

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
	variants: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
	]
}
