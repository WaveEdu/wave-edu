/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				myLight: {
					primary: '#646100',
					secondary: '#616042',
					accent: '#3e6655',
					neutral: '#e6e3d1',
					'base-100': '#fffbff',
					info: '#99bbf4',
					success: '#2abb7f',
					warning: '#c47112',
					error: '#ba1a1a'
				},
				myDark: {
					primary: '#d0cb46',
					secondary: '#cbc8a4',
					accent: '#a5d0bb',
					neutral: '#48473a',
					'base-100': '#1c1c16',
					info: '#99bbf4',
					success: '#2abb7f',
					warning: '#c47112',
					error: '#ffb4ab'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
