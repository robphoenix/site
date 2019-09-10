/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Colours = () => {
  const { theme } = useThemeUI()
  const { colors } = theme
  const colours = {...colors}
  delete colours.modes

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
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
            }}
          >
            <div
              sx={{
                height: [3, 4, 6],
                width: [3, 4, 6],
                backgroundColor: colours[colour],
                border: 1,
                borderColor: 'text',
                borderRadius: '50%',
                marginBottom: 3,
                marginRight: [3, 0],
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
                {colour}
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
                {colors[colour]}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Colours
