import { Header } from './components/Header/index'
import { Main } from './components/Main/index'
import { ThemeProvider } from './components/ThemeProvider'
import { TodosProvider } from './components/TodosProvider'
import { NewTodoInput } from './components/NewTodoInput'
import { TodoList } from './TodoList'

export function App() {
	return (
		<TodosProvider>
			<ThemeProvider>
				<Main>
					<Header />
					<NewTodoInput />
					<TodoList />
				</Main>
			</ThemeProvider>
		</TodosProvider>
	)
}
