import React from 'react'
import { Global, css } from '@emotion/core'

const Reset = () => {
  return (
    <Global
      styles={css({
        'html, body': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          // for page transitions
          transition: 'all 0.2s ease-out 0s',
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
