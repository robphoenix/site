/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const TypeScale = () => {
  const { fontSizes } = useTheme()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {fontSizes.map((fontSize, i) => (
        <div
          key={fontSize}
          sx={{
            fontSize: i,
            fontFamily: 'body',
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
          <span
            sx={{
              display: ['none', 'none', 'inline'],
            }}
          >
            Hamburgefons
          </span>
        </div>
      ))}
    </div>
  )
}

export default TypeScale
