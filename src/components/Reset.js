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
