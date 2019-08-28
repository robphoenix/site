/** @jsx jsx */
import { jsx } from 'theme-ui'

import contrast from 'get-contrast'

import { useTheme } from '../context'

const StyleGuide = () => {
  const { colors, fonts } = useTheme()

  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        columnGap: [2, 3, 4],
        marginBottom: 5,
      }}
    >
      <h2
        sx={{
          gridColumn: '1/-1',
          fontFamily: 'heading',
          fontSize: [2, 3, 4],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          borderBottom: 1,
          borderColor: 'primary',
          marginBottom: 4,
          paddingBottom: 2,
        }}
      >
        Style Guide
      </h2>
      <h3
        sx={{
          gridColumn: '1/1',
          fontFamily: 'heading',
          fontSize: [1, 2, 3],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
        }}
      >
        Colours
      </h3>
      <div
        sx={{
          gridColumn: '3/-1',
          display: 'flex',
          flexDirection: ['column', 'row'],
          justifyContent: 'flex-start',
        }}
      >
        {Object.keys(colors).map((color, i) => (
          <div
            key={color}
            sx={{
              display: 'flex',
              flexDirection: ['row', 'column'],
              alignItems: 'center',
              marginBottom: [3, 4, 5],
            }}
          >
            <div
              sx={{
                height: [3, 4, 5],
                width: [3, 4, 5],
                backgroundColor: colors[color],
                border: 1,
                borderColor: 'text',
                borderRadius: '50%',
                marginRight: [2, 3, 4],
                marginBottom: [1, 2, 3],
              }}
            />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: ['flex-start', 'center'],
                gridColumn: `${i + 1}/${i + 2}`,
                marginRight: [2, 3, 4],
              }}
            >
              <span
                sx={{
                  justifySelf: 'center',
                  color: 'text',
                  fontFamily: 'heading',
                  fontSize: [1, 2, 3],
                  textTransform: 'uppercase',
                  letterSpacing: 'tracked',
                }}
              >
                {color}
              </span>
              <span
                sx={{
                  justifySelf: 'center',
                  color: 'text',
                  fontFamily: 'body',
                  fontSize: [1, 2, 3],
                }}
              >
                {colors[color]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h3
        sx={{
          gridColumn: '1/1',
          fontFamily: 'heading',
          fontSize: [1, 2, 3],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
        }}
      >
        Colour Contrast
      </h3>
      <div
        sx={{
          gridColumn: '3/-1',
          alignSelf: 'start',
          display: 'flex',
          alignItems: 'baseline',
          marginBottom: 5,
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

      <h3
        sx={{
          gridColumn: '1/1',
          fontFamily: 'heading',
          fontSize: [1, 2, 3],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
        }}
      >
        Typography
      </h3>

      <ul
        sx={{
          gridColumn: '3/-1',
          listStyle: 'none',
        }}
      >
        {Object.keys(fonts).map((font, i) => (
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
    </div>
  )
}

export default StyleGuide
