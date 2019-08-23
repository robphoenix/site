/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const Colors = () => {
  const { colors, fonts } = useTheme()

  return (
    <div>
      <div>
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
          }}
        >
          Colours
        </h2>

        <div
          sx={{
            display: 'flex',
          }}
        >
          {Object.keys(colors).map(color => (
            <div key={color}>
              <div
                sx={{
                  paddingY: 4,
                  paddingX: 6,
                  backgroundColor: colors[color],
                  border: 1,
                  borderColor: 'text',
                }}
              />

              <span
                sx={{
                  color: 'text',
                  fontFamily: 'body',
                }}
              >
                {color} {colors[color]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
          }}
        >
          Fonts
        </h2>

        <div
          sx={{
            display: 'flex',
          }}
        >
          <ul>
            {Object.keys(fonts).map((font, i) => (
              <li
                key={`${font}${i}`}
                sx={{
                  fontFamily: font,
                  color: 'text',
                }}
              >
                {font}: {fonts[font]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Colors
