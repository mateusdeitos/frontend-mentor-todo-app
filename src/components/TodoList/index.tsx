import { useFilterTodos } from '../../hooks/useFilterTodos'
import { useTheme } from '../../hooks/useTheme'
import { TodoInput } from '../TodoInput'
import { useTodos } from '../../hooks/useTodos'
import { TodosContainer } from './styles'

export const TodoList = () => {
	const [{ todos }, dispatch] = useTodos()
	const [filter] = useFilterTodos()
	const { theme } = useTheme()

	return (
		<TodosContainer $theme={theme}>
			{todos
				.filter(todo => {
					if (filter === 'all') return true
					if (filter === 'active') return !todo.completed
					if (filter === 'completed') return todo.completed
					return true
				})
				.map(todo => (
					<TodoInput
						todo={todo}
						onChange={payload => dispatch({ type: 'edit-todo', payload })}
						onRemove={() => dispatch({ type: 'delete-todo', payload: todo.id })}
					/>
				))}
		</TodosContainer>
	)
}
