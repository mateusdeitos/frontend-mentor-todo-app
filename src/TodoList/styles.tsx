import styled from 'styled-components'
import { ThemeProps } from '../theme'
import { TodoInputContainer } from '../components/TodoInput/styles'

export const TodosContainer = styled.div<ThemeProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	margin-top: 40px;
	border-radius: 8px;

	${TodoInputContainer}:not(:first-child):not(:last-child) {
		border-radius: 0;
	}
	${TodoInputContainer}:first-child {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	${TodoInputContainer}:last-child {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`
