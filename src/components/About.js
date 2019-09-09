/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'
import Avatar from './Avatar'

const Link = props => {
  const { theme } = useThemeUI()
  return (
    <a
      sx={{
        color: 'text',
        textDecoration: 'none',
        cursor: 'pointer',
        backgroundImage: `linear-gradient(180deg, ${theme.colors.primary}, ${
          theme.colors.primary
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 bottom',
        backgroundSize: '100% 8%',
        transition: 'all 0.2s ease-in-out',
        ':hover,:focus': {
          backgroundSize: '100% 100%',
          color: 'background',
        },
      }}
      {...props}
    />
  )
}

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
        <div
          sx={{
            gridColumn: '3/-1',
          }}
        >
          <p
            sx={{
              fontFamily: 'body',
              color: 'text',
              fontSize: [2, 3, 3],
              lineHeight: 'copy',
              textAlign: 'justify',
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
              <Link href="http://rm-phoenix.co.uk/">art</Link>
            </li>
            <li>
              <Link href={`https://twitter.com/${social.twitter}`}>
                twitter
              </Link>
            </li>
            <li>
              <Link href={`https://github.com/${social.github}`}>github</Link>
            </li>
            <li>
              <Link href={`https://www.linkedin.com/in/${social.linkedin}`}>
                linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
