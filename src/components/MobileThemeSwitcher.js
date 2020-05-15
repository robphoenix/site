import React from 'react'
import { useThemeUI } from 'theme-ui'
import { Select, Button, Text } from '@theme-ui/components'

import { Row } from './Stack'

const ThemeButton = props => (
  <Button
    sx={{
      bg: `transparent`,
      color: `text`,
      border: `2px solid`,
      py: 3,
      borderColor: `inherit`,
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
    }}
    {...props}
  />
)

const MobileThemeSwitcher = () => {
  const themes = [`light`, `dark`, `araf`, `draig`, `bendigedig`]
  const { theme, colorMode, setColorMode, setTheme } = useThemeUI()
  const { fonts } = theme

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
          fontFamily: `body`,
          textTransform: `uppercase`,
          letterSpacing: `tracked`,
          lineHeight: `solid`,
          fontWeight: `bold`,
          fontSize: 2,
          transition: `all 0.15s linear`,
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
