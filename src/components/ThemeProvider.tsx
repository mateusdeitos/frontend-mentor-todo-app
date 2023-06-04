import { createContext, ReactNode, useState } from 'react'
import { GlobalStyles } from './GlobalStyles'

interface ContextValue {
	theme: 'light' | 'dark'
	toggleTheme: () => void
}

export const ThemeContext = createContext<ContextValue | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ContextValue['theme']>(() => {
		const theme = window.localStorage.getItem('theme') as ContextValue['theme']
		if (!theme || !['light', 'dark'].includes(theme)) {
			return 'light'
		}

		return theme
	})

	const toggleTheme = () => {
		setTheme(theme => {
			const newTheme = theme === 'light' ? 'dark' : 'light'
			window.localStorage.setItem('theme', newTheme)
			return newTheme
		})
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<GlobalStyles $theme={theme} />
			{children}
		</ThemeContext.Provider>
	)
}
