/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'
import Avatar from './Avatar'

const About = () => {
  const { description, bio } = useSiteMetadata()

  return (
    <div
      sx={{
        marginBottom: 6,
      }}
    >
      <h2
        sx={{
          fontFamily: 'heading',
          fontSize: 4,
          color: 'text',
          fontWeight: 7,
          marginBottom: 4,
          lineHeight: 'title',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
        }}
      >
        {description}
      </h2>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          columnGap: 5,
        }}
      >
        <div
          sx={{
            gridColumn: '1/3',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar />
        </div>
        <p
          sx={{
            gridColumn: '3/-1',
            fontFamily: 'body',
            color: 'text',
            fontSize: [2, 3, 3],
            lineHeight: 'copy',
            textAlign: 'justify',
          }}
        >
          {bio}
        </p>
      </div>
    </div>
  )
}

export default About
