/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import CycleTheme from './CycleTheme'
import Social from './Social'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = () => {
  const { description, title } = useSiteMetadata()
  return (
    <div
      sx={{
        width: '100%',
        maxWidth: 9,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 5,
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
            marginBottom: 4,
          }}
        >
          {title}
        </h1>
      </Link>
      <h2
        sx={{
          fontFamily: 'heading',
          fontSize: 6,
          color: 'text',
          fontWeight: 'heading',
          lineHeight: 'title',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          marginBottom: 4,
        }}
      >
        {description}
      </h2>
      <Social />
      <div
        sx={{
          display: ['none', 'flex'],
          zIndex: 1,
          top: 0,
          right: 0,
          position: 'fixed',
          padding: 5,
        }}
      >
        <CycleTheme />
      </div>
    </div>
  )
}

export default Header
