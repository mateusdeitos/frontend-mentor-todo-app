import { useTheme } from '../../hooks/useTheme'
import { ToDo } from '../TodosProvider'
import { CheckBox } from '../CheckBox'
import { RemoveTodoButton, TodoInputContainer } from './styles'
import { useState } from 'react'

type InputProps = {
	todo: ToDo
	onSubmit?: (todo: ToDo) => void
	onChange: (todo: ToDo) => void
	onRemove?: () => void
}

export const TodoInput = ({ onSubmit, onChange, onRemove, todo }: InputProps) => {
	const { theme } = useTheme()
	const [shouldShowRemoveButton, setShouldShowRemoveButton] = useState(false)

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

	const showRemoveButton = () => {
		if (todo.id <= 0) return
		setShouldShowRemoveButton(true)
	}

	const hideRemoveButton = () => {
		setShouldShowRemoveButton(false)
	}

	return (
		<TodoInputContainer
			$theme={theme}
			$checked={todo.completed}
			onMouseEnter={showRemoveButton}
			onMouseLeave={hideRemoveButton}
		>
			<CheckBox checked={todo.completed} onClick={() => toggleCheck()} />
			<input
				type="text"
				placeholder="Create a new todo..."
				value={todo.description}
				onChange={e => onChangeDescription(e.target.value)}
				onKeyPress={e => onKeyPress(e)}
			/>

			{!!onRemove && (
				<RemoveTodoButton $show={shouldShowRemoveButton} onClick={() => onRemove()} title="Remove todo">
					<img src="/assets/icon-cross.svg" alt="remove todo" />
				</RemoveTodoButton>
			)}
		</TodoInputContainer>
	)
}
