// @ts-nocheck
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { rhythm } from '../utils/typography'

const iconSideSize = rhythm(0.7)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  margin: ${rhythm(0.2)};
  color: #85144b;
`

function Social() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <Container>
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
