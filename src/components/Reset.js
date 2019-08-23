import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from '../context'

const Reset = () => {
  const { colors } = useTheme()
  return (
    <Global
      styles={css({
        'html, body': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          background: colors.background,
        },
        '*, *:: before, *::after': {
          margin: 0,
          padding: 0,
          boxSizing: 'inherit',
        },
      })}
    />
  )
}

export default Reset
