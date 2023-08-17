import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'

type State = 'all' | 'active' | 'completed'
type Action = State

type Value = [State, Dispatch<Action>]

export const FilterTodosContext = createContext<Value | undefined>(undefined)

const reducer = (_: State, action: Action): State => {
	return action
}

export const FilterTodosProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, 'all')

	return <FilterTodosContext.Provider value={[state, dispatch]}>{children}</FilterTodosContext.Provider>
}
