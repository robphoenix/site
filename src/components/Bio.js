// @ts-nocheck
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import Social from '../components/Social'

const Description = styled.p`
  color: #85144b;
  margin: 0;
`

function Bio() {
  const data = useStaticQuery(
    graphql`
      query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
            bio
          }
        }
      }
    `
  )

  const { author, bio } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(0.5),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <Description>{bio}</Description>
      <Social />
    </div>
  )
}

export default Bio
