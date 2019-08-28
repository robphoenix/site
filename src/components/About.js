/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const About = () => {
  const { description, bio } = useSiteMetadata()

  return (
    <div sx={{ marginBottom: 5 }}>
      <h2
        sx={{
          fontFamily: 'heading',
          fontSize: [2, 3, 4],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          marginBottom: 3,
        }}
      >
        {description}
      </h2>
      <p
        sx={{
          fontFamily: 'body',
          color: 'text',
          fontSize: [1, 2, 3],
          lineHeight: 1.5,
        }}
      >
        {bio}
      </p>
    </div>
  )
}

export default About
