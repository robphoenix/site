/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Title = props => {
  const { title } = useSiteMetadata()

  return (
    <Link
      to="/"
      sx={{
        color: 'text',
        textDecoration: 'none',
      }}
      {...props}
    >
      <h1
        sx={{
          fontFamily: 'heading',
          fontSize: [4, 4, 5],
          fontWeight: 'normal',
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          lineHeight: 1,
          display: 'inline-block',
        }}
      >
        {title}
      </h1>
    </Link>
  )
}

export default Title
