/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import contrast from 'get-contrast'

const ColourContrast = () => {
  const { theme } = useThemeUI()
  const { colors } = theme

  return (
    <div sx={{ display: 'flex' }}>
      <div sx={{ marginRight: 5 }}>
        <span sx={{ fontFamily: 'body', color: 'text' }}>
          text on background
        </span>
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
            {colors &&
              contrast.ratio(colors.text, colors.background).toFixed(2)}
          </span>
          <span sx={{ fontSize: [4, 5, 6] }}>
            {colors && contrast.score(colors.text, colors.background)}
          </span>
        </div>
      </div>
      <div>
        <span sx={{ fontFamily: 'body', color: 'primary' }}>
          primary on background
        </span>
        <div
          sx={{
            alignSelf: 'start',
            display: 'flex',
            alignItems: 'baseline',
            fontFamily: 'body',
            color: 'primary',
            lineHeight: 1,
          }}
        >
          <span sx={{ height: 'auto', fontSize: [5, 6, 7], marginRight: 3 }}>
            {colors &&
              contrast.ratio(colors.primary, colors.background).toFixed(2)}
          </span>
          <span sx={{ fontSize: [4, 5, 6] }}>
            {colors && contrast.score(colors.primary, colors.background)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ColourContrast
