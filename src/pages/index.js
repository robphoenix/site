import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Bio from '../components/Bio'
import BlogPosts from '../components/BlogPosts'
import { graphql } from 'gatsby'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          description={data.site.siteMetadata.description}
        />
        <Bio />
        <BlogPosts />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
