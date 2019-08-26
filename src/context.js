import React from 'react'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { ThemeProvider as Emotion } from 'emotion-theming'
import { ThemeProvider as ThemeUI } from 'theme-ui'

import baseTheme from './theme'

// So much of this is lifted wholesale from theme-ui, props very much due
// https://github.com/system-ui/theme-ui/blob/master/packages/theme-ui/src/color-modes.js

const modes = [`amara`, `elliot`, `marie`]

const STORAGE_KEY = `robphoenix-theme`
const isBrowser = typeof window !== `undefined`

const storage = {
  get: init => {
    const local = isBrowser && window.localStorage.getItem(STORAGE_KEY)
    console.log({ local })
    return local || init
  },
  set: value => isBrowser && window.localStorage.setItem(STORAGE_KEY, value),
}

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

const useThemeState = () => {
  const initialMode = storage.get(modes[0])
  const [mode, setMode] = React.useState(initialMode)
  // const [mode, setMode] = React.useState(modes[0])
  const theme = getTheme(mode)

  const { fonts, colors } = theme
  delete fonts.modes
  delete colors.modes

  React.useEffect(
    () => {
      if (!mode) {
        return
      }
      storage.set(mode)
    },
    [mode]
  )

  return { theme, mode, setMode, fonts, colors }
}

const ThemeProvider = React.memo(({ children }) => {
  const { theme, ...rest } = useThemeState()
  console.log(theme.colors)

  return (
    <Emotion theme={theme}>
      <ThemeContext.Provider value={{ modes, ...rest }}>
        {children}
      </ThemeContext.Provider>
    </Emotion>
  )
})

export { ThemeProvider, useTheme }
