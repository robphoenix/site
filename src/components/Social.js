// @ts-nocheck
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { rhythm } from '../utils/typography'

const iconSideSize = rhythm(0.7)

const SocialLink = styled.a`
  margin: ${rhythm(1 / 10)};
`

function Social() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <SocialLink href={`https://twitter.com/${social.twitter}`}>
              <FaTwitter
                css={`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </SocialLink>
            <SocialLink href={`https://github.com/${social.github}`}>
              <FaGithub
                css={`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </SocialLink>
            <SocialLink href={`https://www.linkedin.com/in/${social.linkedin}`}>
              <FaLinkedin
                css={`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </SocialLink>
          </div>
        )
      }}
    />
  )
}

const socialQuery = graphql`
  query SocialQuery {
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

export default Social
