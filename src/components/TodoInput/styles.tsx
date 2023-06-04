import styled, { css } from 'styled-components'
import { theme, ThemeProps } from '../../theme'

type Props = ThemeProps & {
	$checked: boolean
}
export const TodoInputContainer = styled.div<Props>`
	background-color: ${({ $theme }: Props) => theme.colors[$theme].secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	padding-top: 24px;
	padding-bottom: 24px;
	border: 1px solid ${({ $theme }: Props) => theme.colors[$theme].borderColor};
	border-radius: 8px;

	& > input[type='text'] {
		border: none;
		font-size: ${theme.font.size * 1.5}px;
		background-color: ${({ $theme }: Props) => theme.colors[$theme].secondaryColor};
		outline: none;
		color: ${({ $theme }: Props) => theme.colors[$theme].textColor};

		${({ $theme, $checked }: Props) =>
			$checked &&
			css`
				text-decoration: line-through;
				color: ${theme.colors[$theme].borderColor};
			`}

		::placeholder {
			font-weight: 700;
			color: ${({ $theme }: Props) => theme.colors[$theme].borderColor};
		}
	}
`
