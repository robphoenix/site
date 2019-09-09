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
  )
}

export default Title
