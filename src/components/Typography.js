/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Typography = () => {
  const { theme } = useThemeUI()
  const { fonts } = theme

  return (
    <ul
      sx={{
        listStyle: 'none',
      }}
    >
      {fonts &&
        Object.keys(fonts).map((font, i) => (
          <li
            key={`${font}${i}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: 'text',
              marginBottom: i ? 0 : [3, 4, 4],
            }}
          >
            <span
              sx={{
                fontFamily: 'heading',
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
