// @ts-nocheck
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import { HoverMorphIcon } from 'react-svg-buttons'

const CycleTheme = props => {
  const modes = [`light`, `dark`]
  const { theme, colorMode, setColorMode } = useThemeUI()
  const { colors } = theme

  return (
    <button
      sx={{
        cursor: 'pointer',
        bg: 'transparent',
        color: 'inherit',
        border: 0,
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={() => {
        const index = modes.indexOf(colorMode)
        const next = modes[(index + 1) % modes.length]
        setColorMode(next)
      }}
    >
      <span
        sx={{
          color: 'primary',
          fontFamily: 'body',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          lineHeight: 'solid',
          fontWeight: 'body',
          padding: 2,
          fontSize: [1, 2, 2],
        }}
      >
        {colorMode}
      </span>
      <HoverMorphIcon
        baseType="ban"
        hoverType="fwd"
        color={colors && colors.primary}
        size={24}
        title="Cycle Theme"
      />
    </button>
  )
}

export default CycleTheme
