import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Select, Button, Text, Flex } from '@theme-ui/components'

import { Stack, Row } from './Stack'

const ThemeButton = props => (
  <Button
    sx={{
      bg: props.current ? `primary` : `background`,
      color: props.current ? `background` : `primary`,
      border: `2px solid`,
      py: 3,
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
      ':active': {
        boxShadow: `none`,
      },
    }}
    {...props}
  />
)

const MobileThemeSwitcher = () => {
  const themes = [`light`, `dark`, `araf`, `draig`, `bendigedig`]
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
    <Row space={4} sx={{ color: `primary`, py: 3 }}>
      <Select
        value={colorMode}
        onChange={event => setColorMode(event.currentTarget.value)}
        sx={{
          width: 120,
          border: `2px solid`,
          borderColor: `primary`,
          borderRadius: 0,
          outline: `none`,
          color: `primary`,
          boxShadow: `5px 5px 0 ${theme.colors.primary}`,
          fontFamily: `body`,
          textTransform: `uppercase`,
          letterSpacing: `tracked`,
          lineHeight: `solid`,
          fontWeight: `bold`,
          fontSize: 2,
          ':active': {
            boxShadow: `none`,
          },
        }}
      >
        {themes.map(themeName => (
          <Text key={themeName} as="option" value={themeName}>
            {themeName}
          </Text>
        ))}
      </Select>
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
    </Row>
  )
}

export default MobileThemeSwitcher
