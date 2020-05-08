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
      <Row space={3} align="start" sx={{ width: `100%` }}>
        <Box
          sx={{
            height: 4,
            minWidth: 4,
            backgroundColor: `primary`,
            border: 1,
          }}
        />
        <Flex
          sx={{
            flexDirection: [`column`, `column`, `row`],
            width: `100%`,
            justifyContent: `space-between`,
          }}
        >
          <Stack space={0} align="start" sx={{ mb: [2, 2, 0] }}>
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
            space={0}
            sx={{ alignItems: [`flex-start`, `flex-start`, `flex-end`] }}
          >
            <Text
              sx={{
                fontFamily: `heading`,
                fontSize: [1, 1, 3],
                display: `inline-block`,
                textTransform: `uppercase`,
                letterSpacing: `tracked`,
              }}
            >
              contrast
            </Text>
            <Row space={[2, 2, 3]}>
              <Contrast
                text={theme.colors.primary}
                background={theme.colors.background}
              />
              <Contrast
                text={theme.colors.primary}
                background={theme.colors.offset}
              />
            </Row>
          </Stack>
        </Flex>
      </Row>
      <Colour
        colour={theme.colors.background}
        background={theme.colors.background}
        name="background"
        showColour
      />
      <Colour
        colour={theme.colors.offset}
        background={theme.colors.background}
        name="offset"
        showColour
      />
    </Stack>
  )
}

const Colour = ({ colour, background, name, showContrast }) => (
  <Row space={3} align="start" sx={{ width: `100%` }}>
    <Box
      sx={{
        height: 4,
        minWidth: 4,
        backgroundColor: colour,
        border: 1,
      }}
    />

    <Flex
      sx={{
        width: `100%`,
        justifyContent: `space-between`,
        flexDirection: [`column`, `column`, `row`],
      }}
    >
      <Stack space={0} align="start" sx={{ mb: [2, 2, 0] }}>
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
          space={0}
          align="start"
          sx={{ alignItems: [`flex-start`, `flex-start`, `flex-end`] }}
        >
          <Text
            sx={{
              fontFamily: `heading`,
              fontSize: [1, 1, 3],
              display: `inline-block`,
              textTransform: `uppercase`,
              letterSpacing: `tracked`,
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
        fontSize: [2, 3, 3],
      }}
    >
      {contrast.ratio(text, background).toFixed(2)}
    </Text>
    <Text sx={{ fontSize: [2, 3, 3] }}>{contrast.score(text, background)}</Text>
  </Row>
)

export default Colours
