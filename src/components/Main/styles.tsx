import styled from 'styled-components'
import { ThemeProps, theme } from '../../theme'
import bgDesktopLight from '../../../assets/bg-desktop-light.jpg'
import bgDesktopDark from '../../../assets/bg-desktop-dark.jpg'
import bgMobileLight from '../../../assets/bg-mobile-light.jpg'
import bgMobileDark from '../../../assets/bg-mobile-dark.jpg'

const bgMap = {
	light: {
		desktop: bgDesktopLight,
		mobile: bgMobileLight,
	},
	dark: {
		desktop: bgDesktopDark,
		mobile: bgMobileDark,
	},
}

export const StyledMain = styled.main<ThemeProps>`
	background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].backgroundColor};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 16px;
	width: 100%;
	margin: 0 auto;
`

export const StyledHeaderImage = styled.img<ThemeProps>`
	width: 100%;
	height: auto;
	height: 500px;
	background-image: ${({ $theme }: ThemeProps) => `url(${bgMap[$theme].desktop})`};
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: ${theme.breakpoints.mobile}px) {
		background-image: ${({ $theme }: ThemeProps) => `url(${bgMap[$theme].mobile})`};
	}
`

export const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	min-width: 540px;
	padding: 0 24px;

	margin: -400px auto 0 auto;

	@media (max-width: 540px) {
		min-width: 100%;
	}
`
