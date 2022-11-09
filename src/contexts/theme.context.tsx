import React, { createContext, useContext, useReducer } from 'react'
import { initialState, ThemeReducer } from '@Reducer/theme.reducer'
import { IInitialTheme, IAction } from '@Type/theme'
import { IChildren } from '@Type/utils'

const ThemeContext = createContext({} as IInitialTheme)
const ThemeDispatch = createContext<React.Dispatch<IAction>>(() => {})

const useThemeContext = () => {
	const context = useContext(ThemeContext)
	if(context === undefined) {
		throw new Error('useThemeContext must be used inside a ThemeProvider')
	}
	return context
}

const useThemeDispatch = () => {
	const context = useContext(ThemeDispatch)
	if(context === undefined) {
		throw new Error('useThemeDispatch must be used inside a ThemeProvider')
	}
	return context
}

const ThemeProvider: React.FC<IChildren> = ({ children }) => {
	const [theme, dispatch] = useReducer(ThemeReducer, initialState)

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeDispatch.Provider value={dispatch}>
				{ children }
			</ThemeDispatch.Provider>
		</ThemeContext.Provider>
	)
}

export {
	useThemeContext, useThemeDispatch, ThemeProvider
}