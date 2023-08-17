import { Header } from './components/Header/index'
import { Main } from './components/Main/index'
import { ThemeProvider } from './components/ThemeProvider'
import { TodosProvider } from './components/TodosProvider'
import { NewTodoInput } from './components/NewTodoInput'
import { TodoList } from './TodoList'
import { FilterTodosProvider } from './components/FilterTodosProvider'
import { TodoFilters } from './TodoFilters'

export function App() {
	return (
		<TodosProvider>
			<FilterTodosProvider>
				<ThemeProvider>
					<Main>
						<Header />
						<NewTodoInput />
						<TodoList />
						<TodoFilters />
					</Main>
				</ThemeProvider>
			</FilterTodosProvider>
		</TodosProvider>
	)
}
