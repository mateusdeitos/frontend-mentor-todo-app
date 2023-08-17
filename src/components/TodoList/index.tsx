import { useFilterTodos } from '../../hooks/useFilterTodos'
import { useTheme } from '../../hooks/useTheme'
import { useTodos } from '../../hooks/useTodos'
import { TodosContainer } from './styles'
import { TodoListItem } from '../TodoListItem'

export const TodoList = () => {
	const [{ todos }] = useTodos()
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
				.map((todo, index) => (
					<TodoListItem key={todo.id} index={index} todo={todo} />
				))}
		</TodosContainer>
	)
}
