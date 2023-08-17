import { styled } from 'styled-components'
import { Span } from './Span'
import { useTheme } from '../hooks/useTheme'
import { ThemeProps, theme } from '../theme'

export const DragAndDropInfo = () => {
	const { theme } = useTheme()

	return (
		<DragAndDropInfoContainer $theme={theme}>
			<div>
				<Span $theme={theme}>Drag and drop to reorder list</Span>
			</div>
		</DragAndDropInfoContainer>
	)
}
const DragAndDropInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px 0;
	width: 100%;

	div {
		padding: 4px;
		border-radius: 5px;
		background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].backgroundColor};
	}
`
