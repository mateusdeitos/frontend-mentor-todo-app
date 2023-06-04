import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { ToDo } from './TodosProvider'
import { useTodos } from '../hooks/useTodos'

export const NewTodoInput = () => {
	const [, dispatch] = useTodos()
	const [newTodo, setNewTodo] = useState<ToDo>({
		completed: false,
		description: '',
		id: 0,
	})

	const onSubmit = (todo: ToDo) => {
		dispatch({ type: 'add-todo', payload: todo })
		setNewTodo({
			completed: false,
			description: '',
			id: 0,
		})
	}

	return <TodoInput todo={newTodo} onSubmit={onSubmit} onChange={setNewTodo} />
}
