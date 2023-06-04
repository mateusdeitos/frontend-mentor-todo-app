import { PropsWithChildren } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Content, StyledHeaderImage, StyledMain } from './styles'

export const Main = ({ children }: PropsWithChildren) => {
	const { theme } = useTheme()

	return (
		<StyledMain $theme={theme}>
			<StyledHeaderImage $theme={theme} />
			<Content>{children}</Content>
		</StyledMain>
	)
}
