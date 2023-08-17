import styled from 'styled-components'
import { ThemeProps, theme } from '../theme'
import { LinksContainer } from './Filters'

export const FilterContainer = styled.div<ThemeProps>`
	background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	box-shadow: 0px 35px 50px -15px ${({ $theme }: ThemeProps) => theme.colors[$theme].boxShadow};
	border-top: 1px solid ${({ $theme }: ThemeProps) => theme.colors[$theme].borderColor};

	padding: 16px 24px;

	@media (max-width: ${theme.breakpoints.mobile}px) {
		${LinksContainer} {
			display: none;
		}
	}
`

export const MobileLinksContainer = styled.div<ThemeProps>`
	background-color: ${({ $theme }: ThemeProps) => theme.colors[$theme].secondaryColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	box-shadow: 0px 35px 50px -15px ${({ $theme }: ThemeProps) => theme.colors[$theme].boxShadow};

	padding: 16px 24px;
	margin-top: 16px;

	display: none;

	@media (max-width: ${theme.breakpoints.mobile}px) {
		display: flex;
	}
`
