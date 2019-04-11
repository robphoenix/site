import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import Bio from '../../components/Bio'
import BlogPosts from '../../components/BlogPosts'

const BlogIndex = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title="Home"
        keywords={site.siteMetadata.keywords}
        description={site.siteMetadata.description}
      />
      <Bio />
      <BlogPosts />
    </Layout>
  )
}

export default BlogIndex
