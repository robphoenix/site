/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTheme } from '../context'

const Spacing = () => {
  const { space } = useTheme()
  space.shift()

  return (
    <ul sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
      {space.map((s, i) => (
        <li
          sx={{
            display: 'flex',
          }}
        >
          <div
            sx={{
              height: 1,
              width: `${s}px`,
              backgroundColor: 'primary',
              marginBottom: 2,
              marginRight: 2,
            }}
          />
          <span sx={{ fontFamily: 'body', fontSize: [1, 2, 2] }}>{s}px</span>
        </li>
      ))}
    </ul>
  )
}

export default Spacing
