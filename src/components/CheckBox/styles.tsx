import styled, { css } from 'styled-components'
import { theme, ThemeProps } from '../../theme'

type ContainerProps = ThemeProps & {
	$checked: boolean
}

export const CheckboxContainer = styled.div<ContainerProps>`
	display: inline-block;
	vertical-align: middle;
	padding-left: 24px;
	padding-right: 24px;

	& > span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;

		cursor: pointer;

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
			width: 8px;
			height: 6px;
		}

		border-radius: 50%;
		border: 1px solid ${({ $theme }: ContainerProps) => theme.colors[$theme].borderColor};

		transition: border-color 0.2s ease-in-out;

		&:hover {
			border-color: ${theme.colors.checkBackground.colors[1]};
		}
	}
`
