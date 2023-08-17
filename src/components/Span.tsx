import { styled } from 'styled-components'
import { ThemeProps, theme } from '../theme'

export const Span = styled.span<ThemeProps>`
	color: ${({ $theme }: ThemeProps) => theme.colors[$theme].darkGrayishBlue};
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.194px;
`
