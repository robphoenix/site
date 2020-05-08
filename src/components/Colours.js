import { useThemeUI } from 'theme-ui'
import { Flex, Box, Text } from '@theme-ui/components'
import contrast from 'get-contrast'

import { Row, Stack } from './Stack'

const Colours = () => {
  const { theme } = useThemeUI()

  return (
    <Stack space={4} sx={{ width: `100%` }}>
      <Colour
        colour={theme.colors.text}
        background={theme.colors.background}
        name="text"
        showContrast
      />
      <Row space={[3, 3, 4]} align="start" sx={{ width: `100%` }}>
        <Box
          sx={{
            height: [4, 4, 5],
            minWidth: [4, 4, 5],
            backgroundColor: `primary`,
          }}
        />
        <Stack
          space={3}
          sx={{
            flexDirection: [`column`, `column`, `row`],
            width: `100%`,
            justifyContent: `space-between`,
          }}
        >
          <Stack space={1} align="start" sx={{ mb: [2, 2, 0] }}>
            <Text
              sx={{
                fontFamily: `heading`,
                fontSize: [2, 3, 4],
                display: `inline-block`,
                textTransform: `uppercase`,
                letterSpacing: `tracked`,
              }}
            >
              primary
            </Text>
            <Text
              sx={{
                fontFamily: `heading`,
                fontSize: [1, 2, 3],
                display: `inline-block`,
                textTransform: `uppercase`,
                letterSpacing: `tracked`,
              }}
            >
              {theme.colors.primary}
            </Text>
          </Stack>

          <Stack
            space={1}
            sx={{ alignItems: [`flex-start`, `flex-start`, `flex-end`] }}
          >
            <Text
              sx={{
                fontFamily: `heading`,
                fontSize: [1, 1, 3],
                display: `inline-block`,
                textTransform: `capitalize`,
              }}
            >
              contrast
            </Text>
            <Row space={[2, 2, 3]}>
              <Contrast
                text={theme.colors.primary}
                background={theme.colors.background}
              />
            </Row>
          </Stack>
        </Stack>
      </Row>
      <Colour
        colour={theme.colors.background}
        background={theme.colors.background}
        name="background"
        showColour
      />
    </Stack>
  )
}

const Colour = ({ colour, background, name, showContrast }) => (
  <Row space={[3, 3, 4]} align="start" sx={{ width: `100%` }}>
    <Box
      sx={{
        height: [4, 4, 5],
        minWidth: [4, 4, 5],
        backgroundColor: colour,
      }}
    />

    <Flex
      sx={{
        width: `100%`,
        justifyContent: `space-between`,
        flexDirection: [`column`, `column`, `row`],
      }}
    >
      <Stack space={1} align="start" sx={{ mb: [2, 2, 0] }}>
        <Text
          sx={{
            fontFamily: `heading`,
            fontSize: [2, 3, 4],
            display: `inline-block`,
            textTransform: `uppercase`,
            letterSpacing: `tracked`,
          }}
        >
          {name}
        </Text>
        <Text
          sx={{
            fontFamily: `heading`,
            fontSize: [1, 2, 3],
            display: `inline-block`,
            textTransform: `uppercase`,
            letterSpacing: 'tracked',
          }}
        >
          {colour}
        </Text>
      </Stack>

      {showContrast && (
        <Stack
          space={1}
          align="start"
          sx={{ alignItems: [`flex-start`, `flex-start`, `flex-end`] }}
        >
          <Text
            sx={{
              fontFamily: `heading`,
              fontSize: [1, 1, 3],
              display: `inline-block`,
              textTransform: `capitalize`,
            }}
          >
            contrast
          </Text>
          <Contrast text={colour} background={background} />
        </Stack>
      )}
    </Flex>
  </Row>
)

const Contrast = ({ text, background }) => (
  <Row
    space={[2, 2, 3]}
    sx={{
      alignItems: `baseline`,
      fontFamily: `body`,
      color: text,
      letterSpacing: `tracked`,
      py: 1,
      px: 2,
      border: 1,
      borderColor: text,
      background,
    }}
  >
    <Text
      sx={{
        height: 'auto',
        fontSize: [1, 2, 3],
      }}
    >
      {contrast.ratio(text, background).toFixed(2)}
    </Text>
    <Text sx={{ fontSize: [1, 2, 3] }}>{contrast.score(text, background)}</Text>
  </Row>
)

export default Colours
