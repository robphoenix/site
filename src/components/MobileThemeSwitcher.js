import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Select, Button, Text } from '@theme-ui/components'

import { Row } from './Stack'

const ThemeButton = props => (
  <Button
    sx={{
      // bg: `background`,
      bg: `transparent`,
      color: `text`,
      border: `2px solid`,
      py: 3,
      borderColor: `text`,
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
      // boxShadow: props.current
      //   ? `none`
      //   : `5px 5px 0 ${props.theme.colors.primary}`,
      // ':active': {
      //   boxShadow: `none`,
      // },
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
    <Row space={3} sx={{ color: `primary`, py: 3 }}>
      <Select
        value={colorMode}
        onChange={event => setColorMode(event.currentTarget.value)}
        sx={{
          width: 160,
          border: `2px solid`,
          borderColor: `text`,
          borderRadius: 0,
          outline: `none`,
          color: `text`,
          // boxShadow: `5px 5px 0 ${theme.colors.text}`,
          fontFamily: `body`,
          textTransform: `uppercase`,
          letterSpacing: `tracked`,
          lineHeight: `solid`,
          fontWeight: `bold`,
          fontSize: 2,
          transition: `all 0.15s linear`,
          // ':active': {
          //   boxShadow: `none`,
          // },
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
