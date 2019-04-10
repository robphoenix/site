// @ts-nocheck
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { css } from '@emotion/core'

const iconSideSize = `24px`

function Social() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <Container>
            <a href={`https://twitter.com/${social.twitter}`}>
              <FaTwitter
                css={css`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </a>
            <a href={`https://github.com/${social.github}`}>
              <FaGithub
                css={css`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </a>
            <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
              <FaLinkedin
                css={css`
                  height: ${iconSideSize};
                  width: ${iconSideSize};
                `}
              />
            </a>
          </Container>
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
