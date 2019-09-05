/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const Spacing = () => {
  const { theme } = useThemeUI()
  const { space } = theme
  const mobileLimit = space && space[7]
  const [, ...rest] = space || []

  return (
    <ul sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
      {rest.map(s => (
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
