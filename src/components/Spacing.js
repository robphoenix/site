/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTheme } from '../context'

const Spacing = () => {
  const { space } = useTheme()
  space.shift()

  const mobileLimit = 128

  return (
    <ul sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
      {space.map(s => (
        <li
          key={s}
          sx={{
            display: s > mobileLimit ? ['none', 'flex'] : 'flex',
          }}
        >
          <div
            sx={{
              height: 2,
              width: `${s}px`,
              backgroundColor: 'primary',
              marginBottom: 2,
              marginRight: 1,
              fontFamily: 'body',
              fontSize: [1, 2, 2],
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {s}px
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Spacing
