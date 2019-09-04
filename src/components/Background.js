import React from 'react'
import { Global } from '@emotion/core'

import { useTheme } from '../context'

const Background = () => {
  const { colors } = useTheme()
  console.log({ colors })

  return (
    <Global
      styles={{
        body: {
          background: colors && colors.background,
        },
      }}
    />
  )
}

export default Background
