/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import CycleTheme from './CycleTheme'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = () => {
  const { title } = useSiteMetadata()
  return (
    <div
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // zIndex: 1,
        top: 0,
        right: 0,
        position: 'fixed',
        // bg: `background`,
        paddingX: [2, 3, 4],
        paddingY: [2, 3, 5],
        // borderBottom: `1px solid`,
        // borderColor: 'text',
      }}
    >
      <Link
        to="/"
        sx={{
          color: 'text',
          textDecoration: 'none',
        }}
      >
        <h1
          sx={{
            fontFamily: 'heading',
            fontSize: 3,
            fontWeight: 'heading',
            color: 'text',
            textTransform: 'uppercase',
            letterSpacing: 'mega',
            lineHeight: 'solid',
            display: 'inline-block',
          }}
        >
          {title}
        </h1>
      </Link>
      <div
        sx={{
          display: ['none', 'flex'],
        }}
      >
        <CycleTheme />
      </div>
    </div>
  )
}

export default Header
