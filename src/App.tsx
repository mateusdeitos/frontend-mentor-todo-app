import { Header } from './components/Header/index'
import { Main } from './components/Main/index'
import { ThemeProvider } from './components/ThemeProvider'
import { TodosProvider } from './components/TodosProvider'
import { NewTodoInput } from './components/NewTodoInput'
import { useTodos } from './hooks/useTodos'
import styled from 'styled-components'
import { ThemeProps } from './theme'
import { TodoInput } from './components/TodoInput'
import { TodoInputContainer } from './components/TodoInput/styles'

export function App() {
	return (
		<TodosProvider>
			<ThemeProvider>
				<Main>
					<Header />
					<NewTodoInput />
					<Todos />
				</Main>
			</ThemeProvider>
		</TodosProvider>
	)
}

const Todos = () => {
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

const TodosContainer = styled.div<ThemeProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	margin-top: 40px;
	border-radius: 8px;

	${TodoInputContainer}:not(:first-child):not(:last-child) {
		border-radius: 0;
	}
	${TodoInputContainer}:first-child {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	${TodoInputContainer}:last-child {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`
