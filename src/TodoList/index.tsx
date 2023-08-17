import { useTodos } from '../hooks/useTodos'
import { TodoInput } from '../components/TodoInput'
import { TodosContainer } from './styles'

export const TodoList = () => {
	const [{ todos }, dispatch] = useTodos()

	return (
		<TodosContainer>
			{todos.map(todo => (
				<TodoInput
					todo={todo}
					onChange={payload => dispatch({ type: 'edit-todo', payload })}
					onRemove={() => dispatch({ type: 'delete-todo', payload: todo.id })}
				/>
			))}
		</TodosContainer>
	)
}
