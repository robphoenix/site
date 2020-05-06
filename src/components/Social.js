/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Row } from './Stack'

const Social = () => {
  const { social } = useSiteMetadata()

  return (
    <Row
      space={[3, 3, 4]}
      as="ul"
      sx={{
        listStyle: `none`,
        display: `flex`,
        alignItems: `center`,
        fontFamily: `body`,
        color: `text`,
        fontSize: [1, 2, 3],
      }}
    >
      <SocialLink href="http://rm-phoenix.co.uk/">Art</SocialLink>
      <SocialLink href={`https://github.com/${social.github}`}>
        GitHub
      </SocialLink>
      <SocialLink href={`https://twitter.com/${social.twitter}`}>
        Twitter
      </SocialLink>
      <SocialLink href={`https://www.linkedin.com/in/${social.linkedin}`}>
        LinkedIn
      </SocialLink>
    </Row>
  )
}

const SocialLink = ({ href, children }) => (
  <li
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <a
      href={href}
      sx={{
        color: 'text',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        paddingBottom: 1,
        '::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          backgroundColor: 'primary',
          height: ['1px', '2px'],
          transition: 'width 0.3s ease-out',
          width: '100%',
        },
        ':hover::after,:focus::after,:active::after': {
          left: 'auto',
          right: 0,
          width: 0,
        },
      }}
    >
      {children}
    </a>
  </li>
)

export default Social
