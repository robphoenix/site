import React from 'react'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import baseTheme from './theme'

// So much of this is lifted wholesale from theme-ui, props very much due
// https://github.com/system-ui/theme-ui/blob/master/packages/theme-ui/src/color-modes.js

const modes = [`amara`, `elliot`, `marie`]

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

  const { fonts, colors, fontSizes, space } = theme
  delete fonts.modes
  delete colors.modes

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          modes,
          mode,
          setMode,
          fonts,
          colors,
          fontSizes,
          space,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
})

export { ThemeProvider, useTheme }
