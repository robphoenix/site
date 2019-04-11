import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const query = graphql`
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

const BlogPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(query)

  return allMarkdownRemark.edges.map(({ node }) => {
    const { title, date } = node.frontmatter

    return (
      <div key={node.fields.slug}>
        {date}
        <Link to={node.fields.slug}>{title}</Link>
      </div>
    )
  })
}

export default BlogPosts
