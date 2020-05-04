/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Box } from '@theme-ui/components'

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
          <Box
            as="span"
            sx={{
              textTransform: `capitalize`,
            }}
          >
            {fontWeights[fontWeight]} {fontWeight}
          </Box>
        </li>
      ))}
    </ul>
  )
}

export default FontWeights
