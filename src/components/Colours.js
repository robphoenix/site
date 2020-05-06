import { useThemeUI } from 'theme-ui'
import { Flex, Box, Text } from '@theme-ui/components'

import { Row, Stack } from './Stack'

const Colours = () => {
  const { theme } = useThemeUI()
  const { colors } = theme
  const colours = { ...colors }
  delete colours.modes

  return (
    <Row
      space={4}
      sx={{
        flexDirection: ['column', 'row'],
      }}
    >
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
                  fontSize: [1, 2, 3],
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: 'tracked',
                }}
              >
                {colour}
              </Text>
              <Text
                sx={{
                  fontFamily: `heading`,
                  fontSize: [1, 2, 3],
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: 'tracked',
                }}
              >
                {colors[colour]}
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
          </Stack>
        ))}
    </Row>
  )
}

export default Colours
