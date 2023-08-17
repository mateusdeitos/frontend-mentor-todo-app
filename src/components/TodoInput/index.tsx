import { useTheme } from '../../hooks/useTheme'
import { ToDo } from '../TodosProvider'
import { CheckBox } from '../CheckBox'
import { RemoveTodoButton, TodoInputContainer } from './styles'
import { useState } from 'react'
import * as React from 'react'
import iconCross from '../../../assets/icon-cross.svg'

type InputProps = {
	containerRef?: React.RefObject<HTMLDivElement> | React.RefCallback<HTMLDivElement>
	todo: ToDo
	onSubmit?: (todo: ToDo) => void
	onChange: (todo: ToDo) => void
	onRemove?: () => void
	isOver?: boolean
	isDragging?: boolean
}

export const TodoInput = ({ onSubmit, onChange, onRemove, todo, isOver, isDragging, containerRef }: InputProps) => {
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
			ref={containerRef}
			$isDraggingOver={isOver}
			$isDragging={isDragging}
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
					<img src={iconCross} alt="remove todo" />
				</RemoveTodoButton>
			)}
		</TodoInputContainer>
	)
}
