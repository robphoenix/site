import React from 'react'
import { useTheme } from '../context'

const ToggleTheme = () => {
  const { mode, setMode, modes } = useTheme()

  return (
    <button
      onClick={() => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    >
      {mode}
    </button>
  )
}

export default ToggleTheme