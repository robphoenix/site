// @ts-nocheck
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Social from '../components/Social'

const query = graphql`
  query {
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

const Bio = () => {
  const data = useStaticQuery(query)

  const { author, bio } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>{bio}</p>
      <Social />
    </div>
  )
}

export default Bio
