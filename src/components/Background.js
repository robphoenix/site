import React from 'react'
import { Global } from '@emotion/core'

import { useTheme } from '../context'

const Background = () => {
  const { colors } = useTheme()
  return (
    <Global
      styles={{
        body: {
          background: colors.background,
        },
      }}
    />
  )
}

export default Background
