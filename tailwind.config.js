/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
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
				white: 'var(--white)',
				black: 'var(--black)',
				blue1: 'var(--blue1)',
				blue2: 'var(--blue2)',
				brand1: 'var(--brand1)',
				brand2: 'var(--brand2)',
				text1: 'var(--text-1)',
				text2: 'var(--text-2)',
				text3: 'var(--text-3)',
				bggrad: {
					light: 'var(--white)',
					DEFAULT: 'var(--background)',
					dark: 'var(--background2)'
				},
				grad: {
					left1: 'var(--gradcard-left1)',
					right1: 'var(--gradcard-right1)',
					left2: 'var(--gradcard-left2)',
					right2: 'var(--gradcard-right2)'
				},
				lose: 'var(--green-1)',
				lose2: 'var(--green-2)',
				win: 'var(--red1)',
				win2: 'var(--red2)'
			},
			backgroundImage: {
				bgaccentdark: "url('./bgdark.svg')",
				bgaccentlight: "url('./bglight.svg')"
			},
			boxShadow: {
				card: 'inset 0 0px 4px rgba(63, 114, 156, 0.6)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
