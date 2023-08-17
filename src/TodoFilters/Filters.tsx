import { styled } from 'styled-components'
import { ThemeProps } from '../theme'
import { useTheme } from '../hooks/useTheme'
import { useFilterTodos } from '../hooks/useFilterTodos'
import { ActionLink } from './ActionLink'

export const Filters = () => {
	const { theme } = useTheme()
	const [filter, setFilter] = useFilterTodos()
	return (
		<Container $theme={theme}>
			<ActionLink $isActive={filter === 'all'} $theme={theme} onClick={() => setFilter('all')}>
				All
			</ActionLink>
			<ActionLink $isActive={filter === 'active'} $theme={theme} onClick={() => setFilter('active')}>
				Active
			</ActionLink>
			<ActionLink $isActive={filter === 'completed'} $theme={theme} onClick={() => setFilter('completed')}>
				Completed
			</ActionLink>
		</Container>
	)
}

const Container = styled.div<ThemeProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0;
	gap: 19px;
`
