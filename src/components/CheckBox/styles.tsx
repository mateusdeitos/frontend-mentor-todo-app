import styled, { css } from 'styled-components'
import { theme, ThemeProps } from '../../theme'

type ContainerProps = ThemeProps & {
	$checked: boolean
}

export const CheckboxContainer = styled.div<ContainerProps>`
	display: inline-block;
	vertical-align: middle;
	padding-left: 32px;
	padding-right: 32px;

	& > span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;

		${({ $checked }: ContainerProps) =>
			$checked &&
			css`
				background: linear-gradient(
					${theme.colors.checkBackground.direction},
					${theme.colors.checkBackground.colors[0]},
					${theme.colors.checkBackground.colors[1]}
				);
			`}

		& > img {
			width: 16px;
			height: 12px;
		}

		border-radius: 50%;
		border: 1px solid ${({ $theme }: ContainerProps) => theme.colors[$theme].borderColor};
	}
`
