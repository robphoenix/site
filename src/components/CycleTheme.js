/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { HoverMorphIcon } from 'react-svg-buttons'

import { useTheme } from '../context'

const CycleTheme = () => {
  const { mode, setMode, modes, colors } = useTheme()

  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        sx={{
          color: 'primary',
          fontFamily: 'body',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          marginRight: 1,
        }}
      >
        {mode}
      </span>
      <button
        sx={{
          cursor: 'pointer',
          bg: 'transparent',
          color: 'inherit',
          border: 0,
        }}
        onClick={() => {
          const index = modes.indexOf(mode)
          const next = modes[(index + 1) % modes.length]
          setMode(next)
        }}
      >
        <HoverMorphIcon
          baseType="ban"
          hoverType="fwd"
          color={colors.primary}
          size={32}
          title="Cycle Theme"
        />
      </button>
    </div>
  )
}

export default CycleTheme
