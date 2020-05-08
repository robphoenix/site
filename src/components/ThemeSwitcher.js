import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Box, Button, Heading } from '@theme-ui/components'

import { Stack } from './Stack'

const ThemeButton = props => (
  <Button
    sx={{
      bg: props.current ? `primary` : `background`,
      color: props.current ? `background` : `primary`,
      py: 3,
      border: `2px solid`,
      borderColor: `primary`,
      outline: `none`,
      width: 160,
      borderRadius: 0,
      fontFamily: `body`,
      textTransform: `uppercase`,
      letterSpacing: `tracked`,
      lineHeight: `solid`,
      fontWeight: `bold`,
      fontSize: 2,
      transition: `all 0.15s linear`,
      boxShadow: props.current
        ? `none`
        : `5px 5px 0 ${props.theme.colors.primary}`,
      ':hover': {
        bg: `primary`,
        color: `background`,
      },
      ':active': {
        // bg: `background`,
        // color: `primary`,
        boxShadow: `none`,
      },
    }}
    {...props}
  />
)

const ThemeSwitcher = () => {
  const themes = [`light`, `dark`, `araf`]
  const { theme, colorMode, setColorMode, setTheme } = useThemeUI()
  const { fonts } = theme

  // we do this here otherwise the font wont be picked up on first load if the
  // theme is not the default
  React.useEffect(() => {
    setTheme({
      fonts: fonts.modes[colorMode],
    })
  }, [colorMode])

  return (
    <Stack space={3} align="start">
      <Heading
        as="h3"
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `tracked`,
          fontSize: 2,
          color: `primary`,
        }}
      >
        theme
        <Box as="span" sx={{ color: `text` }}>
          .
        </Box>
      </Heading>
      <Stack as="ul" space={3} sx={{ listStyle: `none` }}>
        <Box as="li">
          <ThemeButton
            theme={theme}
            onClick={() => {
              const index = themes.indexOf(colorMode)
              const next = themes[(index + 1) % themes.length]
              setColorMode(next)
            }}
          >
            next theme
          </ThemeButton>
        </Box>
        {themes.map(themeName => (
          <Box as="li" key={themeName}>
            <ThemeButton
              theme={theme}
              current={colorMode === themeName}
              onClick={() => {
                setColorMode(themeName)
              }}
            >
              {themeName}
            </ThemeButton>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default ThemeSwitcher
