/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const StyleGuide = () => {
  const { colors, fonts } = useTheme()

  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        columnGap: '16px',
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
          marginBottom: 3,
        }}
      >
        Colours
      </h3>
      <div
        sx={{
          gridColumn: '2/-1',
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
                marginRight: [3, 4, 5],
                marginBottom: [1, 2, 3],
              }}
            />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: ['flex-start', 'center'],
                gridColumn: `${i + 1}/${i + 2}`,
                marginRight: [3, 4, 5],
              }}
            >
              <span
                sx={{
                  justifySelf: 'center',
                  color: 'text',
                  fontFamily: 'body',
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

      {/* {Object.keys(colors).map((color, i) => (
        <span
          key={color}
          sx={{
            gridColumn: `${i + 1}/${i + 2}`,
            justifySelf: 'center',
            color: 'text',
            fontFamily: 'body',
            textTransform: 'uppercase',
            letterSpacing: 'tracked',
          }}
        >
          {color}
        </span>
      ))}
      {Object.keys(colors).map((color, i) => (
        <span
          key={color}
          sx={{
            gridColumn: `${i + 1}/${i + 2}`,
            justifySelf: 'center',
            color: 'text',
            fontFamily: 'body',
          }}
        >
          {colors[color]}
        </span>
      ))} */}
      <div
        sx={{
          gridColumn: '1/-1',
        }}
      >
        <h3
          sx={{
            fontFamily: 'heading',
            color: 'text',
          }}
        >
          Fonts
        </h3>

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

export default StyleGuide
