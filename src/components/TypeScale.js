/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const TypeScale = () => {
  const { fontSizes } = useTheme()
  const scale = [...fontSizes].reverse()
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: `repeat(${fontSizes.length}, 1fr)`,
        columnGap: [1, 2, 3],
      }}
    >
      {scale.map((fontSize, i) => (
        <span
          sx={{
            gridRow: '1/2',
            gridColumn: `${i + 1}/${i + 2}`,
            fontSize: fontSize,
            fontFamily: 'body',
            color: 'text',
            alignSelf: 'baseline',
            justifySelf: 'start',
          }}
        >
          A
        </span>
      ))}
      {scale.map((fontSize, i) => (
        <span
          sx={{
            gridRow: '2/3',
            gridColumn: `${i + 1}/${i + 2}`,
            fontSize: [1, 2, 3],
            fontFamily: 'body',
            color: 'text',
          }}
        >
          {fontSize}px
        </span>
      ))}
    </div>
  )
}

export default TypeScale
