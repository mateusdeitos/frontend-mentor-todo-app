const colors = {
	brightBlue: 'hsl(220, 98%, 61%)',
	checkBackground: {
		direction: 'to right',
		colors: ['hsl(192, 100%, 67%)', 'hsl(280, 87%, 65%)'] as const,
	},
	light: {
		textColor: 'hsl(235, 19%, 35%)',
		backgroundColor: 'hsl(0, 0%, 98%)',
		mainColor: 'hsl(0, 0%, 98%)',
		borderColor: '#dcd6d6',
		secondaryColor: '#fff',
		hoverColor: 'hsl(236, 33%, 92%)',
		darkGrayishBlue: 'hsl(236, 9%, 61%)',
		veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
		boxShadow: '#c2c3d67f',
	},
	dark: {
		textColor: 'hsl(234, 39%, 85%)',
		backgroundColor: 'hsl(235, 21%, 11%)',
		mainColor: 'hsl(235, 21%, 11%)',
		borderColor: 'hsl(235, 19%, 35%)',
		secondaryColor: 'hsl(235, 24%, 19%)',
		hoverColor: 'hsl(236, 33%, 92%)',
		darkGrayishBlue: 'hsl(234, 11%, 52%)',
		veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
		boxShadow: '#0000007f',
		veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
	},
}

export const theme = {
	breakpoints: {
		mobile: 540,
	},
	font: {
		size: 18,
		family: 'Josefin Sans',
	},
	colors,
}

export type Theme = typeof theme
export type ThemeProps = { $theme: 'light' | 'dark' }
