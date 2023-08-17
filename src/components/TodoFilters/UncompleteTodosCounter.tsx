import { styled } from 'styled-components'
import { useTodos } from '../hooks/useTodos'
import { ThemeProps, theme } from '../theme'
import { useTheme } from '../hooks/useTheme'

export const UncompleteTodosCounter = () => {
	const [{ todos }] = useTodos()
	const { theme } = useTheme()

	const leftTodos = todos.filter(todo => !todo.completed).length

	return <Span $theme={theme}>{leftTodos} items left</Span>
}

const Span = styled.span<ThemeProps>`
	color: ${({ $theme }: ThemeProps) => theme.colors[$theme].darkGrayishBlue};
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.194px;
`
