import { useThemeUI } from 'theme-ui'
import { Flex, Box, Text } from '@theme-ui/components'
import contrast from 'get-contrast'

import { Row, Stack } from './Stack'

const Colours = () => {
  const { theme } = useThemeUI()
  const { colors } = theme
  const colours = { ...colors }
  delete colours.modes

  return (
    <Row space={4}>
      {colours &&
        Object.keys(colours).map((colour, i) => (
          <Stack
            space={3}
            key={colour}
            sx={{
              flexDirection: ['row', 'column'],
            }}
          >
            <Stack space={1} align="start">
              <Text
                sx={{
                  fontFamily: `heading`,
                  fontSize: [2, 3, 4],
                  display: `inline-block`,
                  textTransform: `uppercase`,
                  letterSpacing: `tracked`,
                }}
              >
                {colour}
              </Text>
            </Stack>
            <Box
              sx={{
                height: [3, 4, 5],
                width: [3, 4, 7],
                backgroundColor: colours[colour],
                border: 1,
                borderColor: colours[colour],
                borderRadius: 3,
              }}
            />
            <Text
              sx={{
                fontFamily: `heading`,
                fontSize: [1, 2, 3],
                display: `inline-block`,
                textTransform: `uppercase`,
                letterSpacing: 'tracked',
              }}
            >
              {colors[colour]}
            </Text>
            <Box
              sx={{
                alignSelf: 'start',
                display: 'flex',
                alignItems: 'baseline',
                fontFamily: 'body',
                color: colors[colour],
                lineHeight: 1,
              }}
            >
              <Text
                sx={{ height: 'auto', fontSize: [2, 3, 4], marginRight: 3 }}
              >
                {colors &&
                  contrast.ratio(colors[colour], colors.background).toFixed(2)}
              </Text>
              <Text sx={{ fontSize: [2, 3, 4] }}>
                {colors && contrast.score(colors.text, colors.background)}
              </Text>
            </Box>
          </Stack>
        ))}
    </Row>
  )
}

export default Colours
