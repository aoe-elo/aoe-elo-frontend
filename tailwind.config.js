/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Poppins, sans-serif'],
			title: ['"Familjen Grotesk", sans-serif']
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1394px',
				xl: '1394px',
				'2xl': '1394px'
			}
		},
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr auto'
			},
			gridTemplateColumns: {
				layout: 'repeat(auto-fill, minmax(250px, 1fr))',
				layout2: '1fr 2fr'
			},
			colors: {
				white: '#ffffff',
				white2: '#DFE3EC',
				black: '#090C10',
				brand1: '#1C2331',
				brand2: '#3F729B',
				text: {
					light: '#F2F4F8',
					DEFAULT: '#3F729B',
					dark: '#344D7F'
				},
				gradientbg: {
					light: '#ffffff',
					DEFAULT: '#F2F4F8',
					dark: '#DFE3EC'
				},
				gradientcard: {
					left1: '#ffffff',
					right1: '#F0F5F9',
					left2: '#BAD1E3',
					right2: '#A8C5DC'
				},
				lose: '#EE2B2B',
				lose2: '#EF4343',
				win: '#09AA23',
				win2: '#5CDD3C'
			},
			backgroundImage: {
				svgbg: "url('./svgbg.svg')"
			},
			boxShadow: {
				card: 'inset 0 0px 4px rgba(63, 114, 156, 0.6)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
