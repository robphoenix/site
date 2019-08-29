/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const Colours = () => {
  const { colors } = useTheme()

  return (
    <div
      sx={{
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
              marginBottom: [2, 3, 3],
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
  )
}

export default Colours
