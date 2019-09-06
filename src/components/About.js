/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const About = () => {
  const { description, bio } = useSiteMetadata()

  return (
    <div
      sx={{
        borderBottom: 1,
        borderColor: 'primary',
        paddingY: 4,
        marginBottom: 5,
      }}
    >
      <h2
        sx={{
          fontFamily: 'heading',
          fontSize: [4, 5, 6],
          color: 'text',
          fontWeight: 'normal',
          marginBottom: 3,
          lineHeight: 1.5,
        }}
      >
        {description}
      </h2>
      <p
        sx={{
          fontFamily: 'body',
          color: 'text',
          fontSize: [2, 3, 3],
          lineHeight: 1.5,
        }}
      >
        {bio}
      </p>
    </div>
  )
}

export default About
