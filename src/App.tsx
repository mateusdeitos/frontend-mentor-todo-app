import { Header } from './components/Header/index'
import { Main } from './components/Main/index'
import { ThemeProvider } from './components/ThemeProvider'
import { TodosProvider } from './components/TodosProvider'
import { NewTodoInput } from './components/NewTodoInput'
import { TodoList } from './components/TodoList'
import { FilterTodosProvider } from './components/FilterTodosProvider'
import { TodoFilters } from './components/TodoFilters'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DragAndDropInfo } from './components/DragAndDropInfo'
import { useMediaQuery } from 'usehooks-ts'
import { theme } from './theme'

export function App() {
	const isMobile = useMediaQuery(`max-width: ${theme.breakpoints.mobile}px`)
	return (
		<DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
			<TodosProvider>
				<FilterTodosProvider>
					<ThemeProvider>
						<Main>
							<Header />
							<NewTodoInput />
							<TodoList />
							<TodoFilters />
							<DragAndDropInfo />
						</Main>
					</ThemeProvider>
				</FilterTodosProvider>
			</TodosProvider>
		</DndProvider>
	)
}
