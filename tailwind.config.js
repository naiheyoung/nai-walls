/** @type {import('tailwindcss').Config} */
module.exports = {
	// 注意空格
	content: ['./index.html', './src/**/*.{html,vue,js}'],
	theme: {
		extend: {
			colors: {
				navBg: 'black',
				textColor: '#809bff',
				activeColor: '#ff3d7f',
			},
		},
		container: {
			padding: '4rem',
		},
	},
	plugins: [],
};
