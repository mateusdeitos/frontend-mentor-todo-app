import { styled } from 'styled-components'
import { Span } from './Span'
import { useTheme } from '../hooks/useTheme'

export const DragAndDropInfo = () => {
	const { theme } = useTheme()

	return (
		<DragAndDropInfoContainer>
			<Span $theme={theme}>Drag and drop to reorder list</Span>
		</DragAndDropInfoContainer>
	)
}
const DragAndDropInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 50px 0;
`
