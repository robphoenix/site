import React from 'react'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import baseTheme from './theme'

const modes = ['amara', 'elliot', 'marie']

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    fonts: get(baseTheme.fonts.modes, mode, baseTheme.fonts),
  })

const ThemeContext = React.createContext({})

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(`useTheme must be used within the custom ThemeProvider`)
  }
  return context
}

const ThemeProvider = React.memo(({ children }) => {
  const [mode, setMode] = React.useState(modes[0])
  const theme = getTheme(mode)

  const { fonts, colors } = theme
  delete fonts.modes
  delete colors.modes

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, setMode, modes, fonts, colors }}>
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
})

export { ThemeProvider, useTheme }
