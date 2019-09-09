/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'
import Avatar from './Avatar'

const About = () => {
  const { description, bio, social } = useSiteMetadata()

  return (
    <div
      sx={{
        marginBottom: 5,
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
          columnGap: [2, 4, 5],
        }}
      >
        <div
          sx={{
            gridColumn: '1/3',
            display: ['none', 'flex'],
            alignItems: 'center',
          }}
        >
          <Avatar />
        </div>
        <div
          sx={{
            gridColumn: ['1/-1', '3/-1'],
          }}
        >
          <p
            sx={{
              fontFamily: 'body',
              color: 'text',
              fontSize: [2, 3, 3],
              lineHeight: 'copy',
              textAlign: ['left', 'justify'],
              marginBottom: 3,
            }}
          >
            {bio}
          </p>
          <ul
            sx={{
              listStyle: 'none',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'body',
              color: 'text',
              fontSize: [1, 2, 3],
              textTransform: 'uppercase',
              letterSpacing: 'tracked',
              lineHeight: 'solid',
            }}
          >
            <li>
              <Styled.a href="http://rm-phoenix.co.uk/">art</Styled.a>
            </li>
            <li>
              <Styled.a href={`https://twitter.com/${social.twitter}`}>
                twitter
              </Styled.a>
            </li>
            <li>
              <Styled.a href={`https://github.com/${social.github}`}>
                github
              </Styled.a>
            </li>
            <li>
              <Styled.a href={`https://www.linkedin.com/in/${social.linkedin}`}>
                linkedin
              </Styled.a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
