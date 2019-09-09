/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Colours = () => {
  const { theme } = useThemeUI()
  const { colors } = theme
  delete colors.modes

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
      }}
    >
      {colors &&
        Object.keys(colors).map((color, i) => (
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
                height: [3, 4, 6],
                width: [3, 4, 6],
                backgroundColor: colors[color],
                border: 1,
                borderColor: 'text',
                borderRadius: '50%',
                marginBottom: 3,
              }}
            />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: ['flex-start', 'center'],
                gridColumn: `${i + 1}/${i + 2}`,
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
                  marginBottom: [3, 3, 0],
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
