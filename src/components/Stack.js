import React from 'react'
import { Flex } from '@theme-ui/components'

const selector = `> *:not(:last-child)`

const alignments = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  baseline: `baseline`,
  stretch: `stretch`,
}

export const Stack = props => {
  const { space = 0, align = `stretch`, sx, ...rest } = props
  return (
    <Flex
      sx={{
        flexDirection: `column`,
        alignItems: alignments[align],
        [selector]: {
          mb: space,
        },
        ...sx,
      }}
      {...rest}
    />
  )
}

export const Row = props => {
  const { space = 0, align = `stretch`, sx, ref: _ref, ...rest } = props
  return (
    <Flex
      sx={{
        flexDirection: `row`,
        alignItems: alignments[align],
        [selector]: {
          mr: space,
        },
        ...sx,
      }}
      {...rest}
    />
  )
}
