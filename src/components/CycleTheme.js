// @ts-nocheck
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import { HoverMorphIcon } from 'react-svg-buttons'

const CycleTheme = () => {
  const modes = [`light`, `dark`]
  const { theme, colorMode, setColorMode } = useThemeUI()
  const { colors } = theme

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
        zIndex: [10, 10, 2],
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
