import { useContext } from 'react'
import { TodosContext } from '../components/TodosProvider'

export const useTodos = () => {
	const context = useContext(TodosContext)
	if (!context) {
		throw new Error('useTodos must be used within a TodosProvider')
	}

	return context
}
