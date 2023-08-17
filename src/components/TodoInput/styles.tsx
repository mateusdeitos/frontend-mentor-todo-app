import styled, { css } from 'styled-components'
import { theme, ThemeProps } from '../../theme'

type Props = ThemeProps & {
	$checked: boolean
	$isDragging: boolean
	$isDraggingOver: boolean
}
export const TodoInputContainer = styled.div<Props>`
	background-color: ${({ $theme }: Props) => theme.colors[$theme].secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	padding-top: 23px;
	padding-bottom: 23px;
	border-radius: 5px;
	transition: filter 0.2s ease-in-out;

	${({ $isDragging, $isDraggingOver }: Props) =>
		($isDragging || $isDraggingOver) &&
		css`
			filter: brightness(0.7);
			cursor: grabbing;
		`}

	& > input[type='text'] {
		border: none;
		font-size: ${theme.font.size * 1}px;
		background-color: ${({ $theme }: Props) => theme.colors[$theme].secondaryColor};
		outline: none;
		width: 100%;
		color: ${({ $theme }: Props) => theme.colors[$theme].textColor};

		caret: block 1px solid ${theme.colors.brightBlue};

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

export const RemoveTodoButton = styled.button<{ $show: boolean }>`
	opacity: 0;
	margin-left: auto;
	padding-right: 24px;
	padding-left: 24px;
	background-color: transparent;
	border: none;
	cursor: pointer;

	transition: opacity 0.2s ease-in-out;

	& > img {
		width: 18px;
		height: 18px;
	}

	${({ $show }: { $show: boolean }) =>
		$show &&
		css`
			opacity: 1;
		`}
`
