import styled from 'styled-components'
import { ThemeProps, theme } from '../theme'

export const FilterContainer = styled.div<ThemeProps>`
	background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	padding: 16px 24px;
`
