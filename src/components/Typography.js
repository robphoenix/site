import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Grid, Text, Flex } from '@theme-ui/components'

import { Stack, Row } from './Stack'

const Typography = () => {
  const { theme } = useThemeUI()
  const { fonts, fontSizes } = theme
  const typography = { ...fonts }
  delete typography['modes']

  return (
    <Stack space={5} align="start">
      <Stack as="ul" space={2}>
        {typography &&
          Object.keys(typography).map((font, i) => (
            <Grid
              columns="1fr 2fr"
              gap={1}
              as="li"
              key={`${font}${i}`}
              sx={{ alignItems: `baseline` }}
            >
              <Text
                sx={{
                  fontFamily: `heading`,
                  textTransform: 'uppercase',
                  letterSpacing: 'tracked',
                  fontSize: [2, 3, 4],
                  marginBottom: [1, 2, 2],
                }}
              >
                {font}
              </Text>
              <Text
                sx={{
                  fontFamily: font,
                  fontSize: [3, 4, 5],
                  fontWeight: 'normal',
                  maxWidth: [7, 7, '100%'],
                }}
              >
                {typography[font]}
              </Text>
            </Grid>
          ))}
      </Stack>
      <Stack as="ul" space={2} sx={{ width: `max-content` }}>
        {fontSizes &&
          fontSizes.map((fontSize, i) => (
            <Flex
              as="li"
              key={fontSize}
              sx={{
                alignItems: `baseline`,
                fontSize: i,
                fontFamily: 'heading',
                color: 'text',
              }}
            >
              <Text sx={{ mr: fontSize }}>{fontSize}px</Text>
              <Text as="span">Hamburgefons</Text>
            </Flex>
          ))}
      </Stack>
    </Stack>
  )
}

export default Typography
