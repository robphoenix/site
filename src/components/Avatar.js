/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const query = graphql`
  query {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Avatar = () => {
  const { avatar } = useStaticQuery(query)
  const { author } = useSiteMetadata()

  return (
    <div
      sx={{
        width: '100%',
        maxWidth: 5,
      }}
    >
      <Image
        fluid={avatar.childImageSharp.fluid}
        alt={author}
        sx={{
          borderRadius: '50%',
          border: 1,
          borderColor: 'text',
        }}
      />
    </div>
  )
}

export default Avatar
