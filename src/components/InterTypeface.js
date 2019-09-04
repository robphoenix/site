import React from 'react'
import { Global, css } from '@emotion/core'

const InterTypeface = () => {
  return (
    <Global
      styles={css`
        @import url('https://rsms.me/inter/inter.css');
      `}
    />
  )
}

export default InterTypeface
