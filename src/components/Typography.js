/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const Typography = () => {
  const { fonts } = useTheme()

  return (
    <ul
      sx={{
        listStyle: 'none',
      }}
    >
      {Object.keys(fonts)
        .reverse()
        .map((font, i) => (
          <li
            key={`${font}${i}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: 'text',
              marginBottom: 3,
            }}
          >
            <span
              sx={{
                fontFamily: 'heading',
                textTransform: 'uppercase',
                letterSpacing: 'tracked',
                fontSize: [1, 2, 3],
              }}
            >
              {font}
            </span>
            <span
              sx={{
                fontFamily: font,
                fontSize: [3, 4, 5],
              }}
            >
              {fonts[font]}
            </span>
          </li>
        ))}
    </ul>
  )
}

export default Typography
