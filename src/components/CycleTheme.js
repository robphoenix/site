// @ts-nocheck
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import { HoverMorphIcon } from 'react-svg-buttons'

const CycleTheme = props => {
  const modes = [`light`, `dark`]
  const { theme, colorMode, setColorMode } = useThemeUI()
  const { colors } = theme

  return (
    <div
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
      {...props}
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
        {colorMode}
      </span>
      <button
        sx={{
          cursor: 'pointer',
          bg: 'transparent',
          color: 'inherit',
          border: 0,
        }}
        onClick={() => {
          const index = modes.indexOf(colorMode)
          const next = modes[(index + 1) % modes.length]
          setColorMode(next)
        }}
      >
        <HoverMorphIcon
          baseType="ban"
          hoverType="fwd"
          color={colors && colors.primary}
          size={32}
          title="Cycle Theme"
        />
      </button>
    </div>
  )
}

export default CycleTheme
