import { useContext } from 'react'
import { FilterTodosContext } from '../components/FilterTodosProvider'

export const useFilterTodos = () => {
	const context = useContext(FilterTodosContext)

	if (context === undefined) {
		throw new Error('useFilterTodos must be used within a FilterTodosProvider')
	}

	return context
}
