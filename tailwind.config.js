const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./**/*.liquid',
		'./src/*.js',
	],
	theme: {
		container: {
		  center: true,
		  padding: '1rem'
		},
		screens: {
			'xs': '414px',
			...defaultTheme.screens,
		},
		extend: {
		  colors: {
			primary: '#F8E28A',
			secondary: '#B0C8C3',
			dark: '#432407',
			light: '#FDF4E9'
		  },
		  backgroundImage: {
			'unsplash': 'url("//source.unsplash.com/1024x768/?interiors")',
		  },
		  fontFamily: {
			'serif': 'Fraunces',
			'sans': 'Open Sans',
		  }
		},
	  },
	plugins: [
		require('tailwindcss-debug-screens'),
	]
}