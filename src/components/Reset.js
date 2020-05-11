import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Global, css } from '@emotion/core'

const Reset = () => {
  const { theme } = useThemeUI()
  return (
    <Global
      styles={css({
        'html, body': {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          // for page transitions
          transition: `all 0.15s ease-out`,
          fontFamily: theme.fonts.body,
        },
        'h1,h2,h3,h4,h5,h6': {
          fontFamily: theme.fonts.heading,
        },
        '*, *:: before, *::after': {
          margin: 0,
          padding: 0,
          boxSizing: `inherit`,
        },
      })}
    />
  )
}

export default Reset
