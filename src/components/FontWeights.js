/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const FontWeights = () => {
  const { theme } = useThemeUI()
  const { fontWeights } = theme
  return (
    <ul
      sx={{
        listStyle: 'none',
      }}
    >
      {Object.keys(fontWeights).map((fontWeight, i) => (
        <li
          key={fontWeight}
          sx={{
            fontFamily: fontWeight,
            fontWeight,
            fontSize: [3, 4, 5],
            marginBottom: i ? 0 : [1, 2, 3],
          }}
        >
          <span
            sx={{
              marginRight: 3,
            }}
          >
            {fontWeights[fontWeight]}
          </span>
          <span>{fontWeight}</span>
        </li>
      ))}
    </ul>
  )
}

export default FontWeights
