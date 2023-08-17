import styled from 'styled-components'
import { theme, ThemeProps } from '../../theme'
import iconMoon from '../../../assets/icon-moon.svg'
import iconSun from '../../../assets/icon-sun.svg'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 72px;
`

export const Title = styled.h1`
	font-size: 40px;
	color: #fff;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 15px;

	@media (max-width: ${theme.breakpoints.mobile}px) {
		font-size: 27px;
	}
`

export const IconButton = styled.button<ThemeProps>`
	background-color: transparent;
	border: none;
	cursor: pointer;
	background-image: url(${props => (props.$theme === 'light' ? iconMoon : iconSun)});
	background-repeat: no-repeat;
	background-size: cover;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
`
