/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTheme } from '../context'

const Spacing = () => {
  const { space } = useTheme()
  const mobileLimit = space[7]
  space.shift()

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
              color: 'text',
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
