import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Box, Text } from '@theme-ui/components'

import { Row, Stack } from './Stack'

const Spacing = () => {
  const { theme } = useThemeUI()
  const { space } = theme

  return (
    <Stack space={3} as="ul" sx={{ listStyle: 'none' }}>
      {space.map(s => (
        <Row as="li" key={s} space={2} sx={{ alignItems: 'center' }}>
          {s > 0 && (
            <Box
              sx={{
                height: [2, 3],
                minWidth: `${s}px`,
                backgroundColor: `primary`,
              }}
            />
          )}
          <Text
            sx={{
              fontFamily: `heading`,
              fontSize: [1, 2, 2],
              color: `text`,
            }}
          >
            {s}px
          </Text>
        </Row>
      ))}
    </Stack>
  )
}

export default Spacing
