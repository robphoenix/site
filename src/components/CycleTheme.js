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
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: [1, 1, 0],
        borderColor: 'primary',
        paddingX: [3, 3, 4],
        paddingY: [2, 2, 4],
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: ['background', 'background', 'transparent'],
        alignItems: 'center',
      }}
    >
      <span
        sx={{
          color: 'primary',
          fontFamily: 'body',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          marginRight: 2,
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
