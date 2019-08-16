/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useThemeUI, useColorMode } from 'theme-ui'

const Colors = () => {
  const { theme } = useThemeUI()
  const [colorMode] = useColorMode()
  const currentMode = theme.colors.modes[colorMode]
  const colors = Object.keys(currentMode)

  return (
    <div>
      <h2>Colours</h2>
      <div
        sx={{
          display: 'flex',
        }}
      >
        {colors.map(color => (
          <div key={color}>
            <div
              sx={{
                paddingY: 4,
                paddingX: 6,
                backgroundColor: currentMode[color],
                border: 1,
                borderColor: 'text',
              }}
            />
            <span>
              {color} {currentMode[color]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Colors
