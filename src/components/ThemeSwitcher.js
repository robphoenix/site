import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Box, Button, Heading } from '@theme-ui/components'

import { Stack } from './Stack'

const ThemeButton = props => (
  <Button
    sx={{
      bg: props.current ? `primary` : `background`,
      color: props.current ? `background` : `primary`,
      border: `3px solid`,
      borderColor: `primary`,
      outline: `none`,
      // height: 3,
      width: `100%`,
      borderRadius: 0,
      fontFamily: `body`,
      textTransform: `uppercase`,
      letterSpacing: `tracked`,
      lineHeight: `solid`,
      fontWeight: `bold`,
      fontSize: 1,
      transition: `all 0.2s linear`,
      ':hover': {
        bg: `primary`,
        color: `background`,
      },
    }}
    {...props}
  />
)

const ThemeSwitcher = () => {
  const themes = [`light`, `dark`]
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
      </Heading>
      <Stack as="ul" space={2} sx={{ listStyle: `none` }}>
        <Box as="li">
          <ThemeButton
            onClick={() => {
              const index = themes.indexOf(colorMode)
              const next = themes[(index + 1) % themes.length]
              setColorMode(next)
            }}
          >
            next theme
          </ThemeButton>
        </Box>
        {themes.map(theme => (
          <Box as="li">
            <ThemeButton
              current={colorMode === theme}
              onClick={() => {
                setColorMode(theme)
              }}
            >
              {theme}
            </ThemeButton>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default ThemeSwitcher
