/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Typography = () => {
  const { theme } = useThemeUI()
  const { fonts } = theme
  const typography = { ...fonts }
  delete typography['modes']

  return (
    <ul
      sx={{
        listStyle: 'none',
      }}
    >
      {typography &&
        Object.keys(typography).map((font, i) => (
          <li
            key={`${font}${i}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: 'text',
              marginBottom:
                i > Object.keys(typography).length - 2 ? 0 : [3, 4, 4],
            }}
          >
            <span
              sx={{
                fontFamily: 'body',
                textTransform: 'uppercase',
                letterSpacing: 'tracked',
                fontSize: [1, 2, 3],
                marginBottom: [1, 2, 3],
              }}
            >
              {font}
            </span>
            <span
              sx={{
                fontFamily: font,
                fontSize: [3, 4, 5],
                fontWeight: 'normal',
                maxWidth: [7, 7, '100%'],
              }}
            >
              {typography[font]}
            </span>
          </li>
        ))}
    </ul>
  )
}

export default Typography
