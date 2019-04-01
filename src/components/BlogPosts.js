import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  text-transform: uppercase;
  letter-spacing: ${rhythm(1 / 10)};
`

const TitleLink = styled(Link)`
  box-shadow: none;
  color: #2ecc40;
`

const SmallDate = styled.small`
  color: #aaaaaa;
`

function BlogPosts() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
              }
            }
          }
        }
      }
    `
  )
  const posts = data.allMarkdownRemark.edges

  return posts.map(({ node }) => {
    const { title, date } = node.frontmatter

    return (
      <div key={node.fields.slug}>
        <Title>
          <TitleLink to={node.fields.slug}>{title}</TitleLink>
        </Title>
        <SmallDate>{date}</SmallDate>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    )
  })
}

export default BlogPosts
