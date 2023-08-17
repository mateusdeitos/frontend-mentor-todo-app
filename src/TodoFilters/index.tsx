import { useTheme } from '../hooks/useTheme'
import { useTodos } from '../hooks/useTodos'
import { ActionLink } from './ActionLink'
import { Filters } from './Filters'
import { UncompleteTodosCounter } from './UncompleteTodosCounter'
import { FilterContainer, MobileLinksContainer } from './styles'

export const TodoFilters = () => {
	const [{ todos }, dispatch] = useTodos()
	const { theme } = useTheme()

	const hasCompletedTodos = todos.some(todo => todo.completed)

	return (
		<>
			<FilterContainer $theme={theme}>
				<UncompleteTodosCounter />
				<Filters />
				<ActionLink $isHidden={!hasCompletedTodos} $theme={theme} onClick={() => dispatch({ type: 'clear-completed' })}>
					Clear completed
				</ActionLink>
			</FilterContainer>
			<MobileLinksContainer $theme={theme}>
				<Filters />
			</MobileLinksContainer>
		</>
	)
}
