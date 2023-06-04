import { createContext, Dispatch, PropsWithChildren, useEffect, useReducer } from 'react'

export type ToDo = {
	id: number
	description: string
	completed: boolean
}

type State = {
	todos: ToDo[]
}

type Action =
	| {
			type: 'add-todo'
			payload: Omit<ToDo, 'id'>
	  }
	| {
			type: 'toggle-todo'
			payload?: {
				id: number
				completed?: boolean
			}
	  }
	| {
			type: 'delete-todo'
			payload: number
	  }
	| {
			type: 'edit-todo'
			payload: ToDo
	  }

type Value = [State, Dispatch<Action>]

export const TodosContext = createContext<Value | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'add-todo':
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: Date.now(),
						description: action.payload.description,
						completed: action.payload.completed,
					},
				],
			}

		case 'edit-todo':
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return action.payload
					}
					return todo
				}),
			}

		case 'toggle-todo':
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload?.id) {
						return {
							...todo,
							completed: typeof action.payload?.completed === 'boolean' ? action.payload.completed : !todo.completed,
						}
					}
					return todo
				}),
			}

		case 'delete-todo':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}

		default:
			return state
	}
}

export const TodosProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, undefined, () => {
		const stored = window.localStorage.getItem('todos')
		let todos: ToDo[] = []
		try {
			todos = stored ? JSON.parse(stored) : []
		} catch (error) {
			todos = []
		}

		return {
			todos,
		}
	})

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(state.todos))
	}, [state.todos])

	return <TodosContext.Provider value={[state, dispatch]}>{children}</TodosContext.Provider>
}
