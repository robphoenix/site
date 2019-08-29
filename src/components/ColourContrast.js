/** @jsx jsx */
import { jsx } from 'theme-ui'

import contrast from 'get-contrast'
import { useTheme } from '../context'

const ColourContrast = () => {
  const { colors } = useTheme()

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
      <span sx={{ height: 'auto', fontSize: [6, 7, 8], marginRight: 3 }}>
        {contrast.ratio(colors.text, colors.background).toFixed(2)}
      </span>
      <span sx={{ fontSize: [5, 6, 7] }}>
        {contrast.score(colors.text, colors.background)}
      </span>
    </div>
  )
}

export default ColourContrast
