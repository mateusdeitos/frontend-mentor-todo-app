import { useTodos } from '../../hooks/useTodos'
import { useTheme } from '../../hooks/useTheme'
import { Span } from '../Span'

export const UncompleteTodosCounter = () => {
	const [{ todos }] = useTodos()
	const { theme } = useTheme()

	const leftTodos = todos.filter(todo => !todo.completed).length

	return <Span $theme={theme}>{leftTodos} items left</Span>
}
