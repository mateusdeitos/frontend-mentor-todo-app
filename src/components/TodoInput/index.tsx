import { useTheme } from '../../hooks/useTheme'
import { ToDo } from '../TodosProvider'
import { CheckBox } from '../CheckBox'
import { TodoInputContainer } from './styles'

type InputProps = {
	todo: ToDo
	onSubmit?: (todo: ToDo) => void
	onChange: (todo: ToDo) => void
}

export const TodoInput = ({ onSubmit, onChange, todo }: InputProps) => {
	const { theme } = useTheme()

	const toggleCheck = () => {
		onChange({
			...todo,
			completed: !todo.completed,
		})
	}

	const onChangeDescription = (description: string) => {
		onChange({
			...todo,
			description,
		})
	}

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && todo.description !== '') {
			onSubmit?.(todo)
		}
	}

	return (
		<TodoInputContainer $theme={theme} $checked={todo.completed}>
			<CheckBox checked={todo.completed} onClick={() => toggleCheck()} />
			<input
				type="text"
				placeholder="Create a new todo..."
				value={todo.description}
				onChange={e => onChangeDescription(e.target.value)}
				onKeyPress={e => onKeyPress(e)}
			/>
		</TodoInputContainer>
	)
}
