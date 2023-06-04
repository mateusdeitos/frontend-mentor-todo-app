import { createGlobalStyle } from 'styled-components'
import { theme, ThemeProps } from '../theme'

export const GlobalStyles = createGlobalStyle<ThemeProps>`
	div#root {
		width: 100%;
		height: 100vh;
	}
	body {
		background-color: ${props => theme.colors[props.$theme].backgroundColor};
		color: ${props => theme.colors[props.$theme].textColor};
		font-size: ${theme.font.size};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		margin: 0;

		@media (max-width: ${`${theme.breakpoints.mobile}px`}) {
			padding: 0;
			margin-top: 0;
			justify-content: flex-start;
		}
	}

	* {
		padding: 0;
		margin: 0;
		font-family: ${theme.font.family};
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
`
