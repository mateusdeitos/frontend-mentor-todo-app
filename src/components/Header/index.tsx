import { useTheme } from '../../hooks/useTheme'
import { Container, IconButton, Title } from './styles'

export const Header = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Container>
			<Title>TODO</Title>
			<IconButton $theme={theme} onClick={() => toggleTheme()} />
		</Container>
	)
}
