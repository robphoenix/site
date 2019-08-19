import React from 'react'
import { useTheme } from '../context/theme'

const ColorModeToggle = () => {
  const { mode, setMode } = useTheme()

  return (
    <button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      Toggle {mode === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}

export default ColorModeToggle
