/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const LetterSpacings = () => {
  const { theme } = useThemeUI()
  const { letterSpacings } = theme
  return (
    <ul
      sx={{
        listStyle: 'none',
      }}
    >
      {Object.keys(letterSpacings).map((letterSpacing, i) => (
        <li
          key={letterSpacing}
          sx={{
            fontFamily: 'heading',
            fontWeight: 'heading',
            fontSize: [3, 4, 5],
            marginBottom: i ? 0 : [1, 2, 3],
          }}
        >
          <span
            sx={{
              marginRight: 3,
            }}
          >
            {letterSpacings[letterSpacing]}
          </span>
          <span
            sx={{
              textTransform: 'uppercase',
              letterSpacing,
            }}
          >
            {letterSpacing}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default LetterSpacings
