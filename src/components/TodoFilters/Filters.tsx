import { styled } from 'styled-components'
import { ThemeProps } from '../../theme'
import { useTheme } from '../../hooks/useTheme'
import { useFilterTodos } from '../../hooks/useFilterTodos'
import { ActionLink } from './ActionLink'

export const Filters = () => {
	const { theme } = useTheme()
	const [filter, setFilter] = useFilterTodos()
	return (
		<LinksContainer $theme={theme}>
			<ActionLink $isActive={filter === 'all'} $theme={theme} onClick={() => setFilter('all')}>
				All
			</ActionLink>
			<ActionLink $isActive={filter === 'active'} $theme={theme} onClick={() => setFilter('active')}>
				Active
			</ActionLink>
			<ActionLink $isActive={filter === 'completed'} $theme={theme} onClick={() => setFilter('completed')}>
				Completed
			</ActionLink>
		</LinksContainer>
	)
}

export const LinksContainer = styled.div<ThemeProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0;
	gap: 19px;
`
