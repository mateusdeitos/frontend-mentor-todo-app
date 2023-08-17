import { TodoInput } from './TodoInput'
import { ToDo } from './TodosProvider'
import { useTodos } from '../hooks/useTodos'
import { useDrag, useDrop } from 'react-dnd'

type Props = {
	todo: ToDo
	index: number
}

export const TodoListItem = ({ todo, index }: Props) => {
	const [, dispatch] = useTodos()
	const [{ isDragging }, dragRef] = useDrag({
		type: 'todo',
		canDrag: todo.id > 0,
		item: { index },
		collect(monitor) {
			return {
				isDragging: monitor.isDragging(),
			}
		},
	})

	const [{ isOver }, dropRef] = useDrop({
		accept: 'todo',
		drop(item: { index: number }) {
			dispatch({
				type: 'move-todo',
				payload: {
					from: item.index,
					to: index,
				},
			})
		},
		collect(monitor) {
			return {
				isOver: monitor.isOver(),
			}
		},
	})

	const combinedRef = (ref: any) => {
		dragRef(ref)
		dropRef(ref)
	}

	return (
		<TodoInput
			todo={todo}
			onChange={payload => dispatch({ type: 'edit-todo', payload })}
			onRemove={() => dispatch({ type: 'delete-todo', payload: todo.id })}
			containerRef={combinedRef}
			isDragging={isDragging}
			isOver={isOver}
		/>
	)
}
