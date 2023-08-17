import { styled } from 'styled-components'
import { ThemeProps, theme } from '../../theme'

export type LinkStyleProps = ThemeProps & {
	$isActive: boolean
	$isHidden?: boolean
}

export const ActionLink = styled.a<LinkStyleProps>`
	color: ${({ $theme }: LinkStyleProps) => theme.colors[$theme].darkGrayishBlue};

	${({ $isActive }: LinkStyleProps) => $isActive && `color: ${theme.colors.brightBlue};`}
	${({ $isHidden }: LinkStyleProps) => $isHidden && `visibility: hidden;`}

	transition: color 0.2s ease-in-out;

	font-size: 14px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	cursor: pointer;
`
