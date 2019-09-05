/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import contrast from 'get-contrast'

const ColourContrast = () => {
  const { theme } = useThemeUI()
  const { colors } = theme

  return (
    <div
      sx={{
        alignSelf: 'start',
        display: 'flex',
        alignItems: 'baseline',
        fontFamily: 'body',
        color: 'text',
        lineHeight: 1,
      }}
    >
      <span sx={{ height: 'auto', fontSize: [5, 6, 7], marginRight: 3 }}>
        {colors && contrast.ratio(colors.text, colors.background).toFixed(2)}
      </span>
      <span sx={{ fontSize: [4, 5, 6] }}>
        {colors && contrast.score(colors.text, colors.background)}
      </span>
    </div>
  )
}

export default ColourContrast
