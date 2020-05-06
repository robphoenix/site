/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const TypeScale = () => {
  const { theme } = useThemeUI()
  const { fontSizes } = theme

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {fontSizes &&
        fontSizes.map((fontSize, i) => (
          <div
            key={fontSize}
            sx={{
              fontSize: i,
              fontFamily: 'heading',
              color: 'text',
            }}
          >
            <span
              sx={{
                marginRight: `${fontSize}px`,
              }}
            >
              {fontSize}px
            </span>
            <span>Hamburgefons</span>
          </div>
        ))}
    </div>
  )
}

export default TypeScale
