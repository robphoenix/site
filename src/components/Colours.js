/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Colours = () => {
  const { theme } = useThemeUI()
  const { colors } = theme
  const colours = { ...colors }
  delete colours.modes

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}
    >
      {colours &&
        Object.keys(colours).map((colour, i) => (
          <div
            key={colour}
            sx={{
              display: 'flex',
              flexDirection: ['row', 'column'],
              alignItems: 'center',
              marginRight: i < Object.keys(colours).length - 1 ? 4 : 'none',
            }}
          >
            <div
              sx={{
                height: [3, 4, 5],
                width: [3, 4, 7],
                backgroundColor: colours[colour],
                border: 1,
                borderColor: 'text',
                marginBottom: 3,
              }}
            />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: ['flex-start', 'center'],
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
                {colour}
              </span>
              <span
                sx={{
                  color: 'text',
                  fontFamily: 'body',
                  fontSize: [1, 2, 3],
                  marginBottom: [3, 3, 0],
                }}
              >
                {colors[colour]}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Colours
