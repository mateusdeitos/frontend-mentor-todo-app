import styled from 'styled-components'
import { ThemeProps, theme } from '../../theme'

export const StyledMain = styled.main<ThemeProps>`
	background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].backgroundColor};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 16px;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
`

export const StyledHeaderImage = styled.img<ThemeProps>`
	width: 100%;
	height: auto;
	height: 500px;
	background-image: url('/assets/bg-desktop-${props => props.$theme}.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 768px;

	margin: -400px auto 0 auto;
`
