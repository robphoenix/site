// @ts-nocheck
/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Box, Label, Radio } from '@theme-ui/components'

import React from 'react'

import { HoverMorphIcon } from 'react-svg-buttons'

const CycleTheme = () => {
  const modes = [`light`, `dark`]
  const { theme, colorMode, setColorMode, setTheme } = useThemeUI()
  const { colors, fonts } = theme

  // we do this here otherwise the font wont be picked up on first load if the
  // theme is not the default
  React.useEffect(() => {
    setTheme({
      fonts: fonts.modes[colorMode],
    })
  }, [colorMode])

  return (
    <button
      sx={{
        cursor: 'pointer',
        bg: 'background',
        color: 'primary',
        // border: 0,
        border: `1px solid`,
        borderColor: 'primary',
        outline: `none`,
        // px: 3,
        height: 3,
        width: `160px`,
        borderRadius: 3,
        fontFamily: 'body',
        textTransform: 'uppercase',
        letterSpacing: 'tracked',
        lineHeight: 'solid',
        fontWeight: 'body',
        fontSize: 1,
        transition: `all 0.2s linear`,
        ':hover': {
          bg: 'primary',
          color: 'background',
        },
      }}
      onClick={() => {
        const index = modes.indexOf(colorMode)
        const next = modes[(index + 1) % modes.length]
        setColorMode(next)
      }}
    >
      {colorMode} theme
    </button>
  )
}

export default CycleTheme
