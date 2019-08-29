/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Title = () => {
  const { title } = useSiteMetadata()

  return (
    <Link
      to="/"
      sx={{
        color: 'background',
        textDecoration: 'none',
      }}
    >
      <h1
        sx={{
          fontFamily: 'heading',
          fontSize: [4, 4, 5],
          fontWeight: 'normal',
          color: 'background',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          lineHeight: 1,
        }}
      >
        {title}
      </h1>
    </Link>
  )
}

export default Title