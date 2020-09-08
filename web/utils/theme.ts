import { DefaultTheme } from 'styled-components';

// Responsiveness
const size = {
	mobile: '425px',
	tablet: '768px',
	desktop: '1024px',
	widescreen: '1440px',
	fullhd: '2560px',
};

const colors = {
	// Neutrals
	N900: '#0C1C3A',
	N800: '#162644',
	N700: '#21314E',
	N600: '#2D3D58',
	N500: '#3A4863',
	N400: '#46556E',
	N300: '#546179',
	N200: '#606C81',
	N100: '#6F7B8F',
	N90: '#7E889A',
	N80: '#8C96A5',
	N70: '#9BA3B1',
	N60: '#AAB1BD',
	N50: '#B9BFC9',
	N40: '#DADCE2',
	N30: '#E8E9EE',
	N20: '#F2F3F6',
	N10: '#F9FAFC',
	N0: '#FFFFFF',
	// Blues
	B500: '#093F9C',
	B400: '#0049C5',
	B300: '#005BFF',
	B200: '#2179FF',
	B100: '#4290FF',
	B75: '#AACEFF',
	B50: '#D9E8FF',
};

const typography = {
	h2: {
		size: '32px',
		lineHeight: '40px',
		weight: 500,
	},
	h3: {
		size: '28px',
		lineHeight: '32px',
		weight: 500,
	},
	h4: {
		size: '28px',
		lineHeight: '32px',
		weight: 500,
	},
	h5: {
		size: '24px',
		lineHeight: '28px',
		weight: 400,
	},
	h6: {
		size: '20px',
		lineHeight: '24px',
		weight: 500,
	},
	subtitle1: {
		size: '16px',
		lineHeight: '20px',
		weight: 400,
	},
	subtitle2: {
		size: '14px',
		lineHeight: '16px',
		weight: 500,
	},
	body1: {
		size: '16px',
		lineHeight: '24px',
		weight: 400,
	},
	body2: {
		size: '14px',
		lineHeight: '20px',
		weight: 400,
	},
	button: {
		size: '14px',
		lineHeight: '16px',
		weight: 500,
	},
	caption: {
		size: '12px',
		lineHeight: '16px',
		weight: 400,
	},
	outline: {
		size: '10px',
		lineHeight: '12px',
		weight: 400,
	},
};

const theme: DefaultTheme = {
	colors,
	typography,
	device: {
		mobile: `(min-width: ${size.mobile})`,
		tablet: `(min-width: ${size.tablet})`,
		desktop: `(min-width: ${size.desktop})`,
		widescreen: `(min-width: ${size.widescreen})`,
		fullhd: `(min-width: ${size.fullhd})`,
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		sans: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)',
	},
	buttons: {
		primary: {
			color: '#fff',
			backgroundColor: colors.B400,
			fontWeight: '400',
		},
		inverted: {
			color: '#000',
			backgroundColor: colors.N0,
			fontWeight: '400',
		},
	},
};

export { theme };
