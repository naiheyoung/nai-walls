/** @type {import('tailwindcss').Config} */
module.exports = {
  // 注意空格
	content: ['./index.html', './src/**/*.{html,vue,js}'],
	theme: {
		extend: {
			colors: {
				test1: '#00668A',
				test2: '#004E71',
			},
		},
		container: {
			padding: '4rem',
		},
	},
	plugins: [],
};
