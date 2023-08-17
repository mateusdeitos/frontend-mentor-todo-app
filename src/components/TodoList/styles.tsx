import styled from 'styled-components'
import { TodoInputContainer } from '../TodoInput/styles'
import { ThemeProps, theme } from '../../theme'

export const TodosContainer = styled.div<ThemeProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	margin-top: 40px;
	box-shadow: 0px 35px 50px -15px ${({ $theme }: ThemeProps) => theme.colors[$theme].boxShadow};

	${TodoInputContainer}:not(:first-child) {
		border-radius: 0;
		border-top: 1px solid ${({ $theme }: ThemeProps) => theme.colors[$theme].borderColor};
	}

	${TodoInputContainer}:first-child {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`
