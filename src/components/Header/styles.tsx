import styled from 'styled-components'
import { theme, ThemeProps } from '../../theme'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 72px;
`

export const Title = styled.h1`
	font-size: ${theme.font.size * 3.5}px;
	color: #fff;
	letter-spacing: 32px;
`

export const IconButton = styled.button<ThemeProps>`
	background-color: transparent;
	border: none;
	cursor: pointer;
	background-image: url(${props => (props.$theme === 'light' ? '/assets/icon-moon.svg' : '/assets/icon-sun.svg')});
	background-repeat: no-repeat;
	background-size: cover;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
`
