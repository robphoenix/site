import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

const Social = () => {
  const { site } = useStaticQuery(query)
  const { social } = site.siteMetadata
  const iconSize = 24

  return (
    <div>
      <a href={`https://twitter.com/${social.twitter}`}>
        <FaTwitter size={iconSize} />
      </a>
      <a href={`https://github.com/${social.github}`}>
        <FaGithub size={iconSize} />
      </a>
      <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
        <FaLinkedin size={iconSize} />
      </a>
    </div>
  )
}

export default Social
