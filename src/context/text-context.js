import React from 'react'

import { useThemeUI } from 'theme-ui'

const TextContext = React.createContext({})

const TextProvider = () => {
  const { theme } = useThemeUI()
  // set in local storage
  //   const initialVariant = Object.keys(theme.text)[0]
  //   console.log({ initialVariant })

  const [variant, setVariant] = React.useState(``)

  return <TextContext.Provider value={{ variant, setVariant }} />
}

const useTextMode = () => {
  const context = React.useContext(TextContext)
  if (context === undefined) {
    throw new Error(`useTextMode must be used within a TextProvider`)
  }
}
