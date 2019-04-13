import React from 'react'

import SEO from '../../components/seo'
import Bio from '../../components/Bio'
import BlogPosts from '../../components/BlogPosts'
import Layout from '../../components/Layout'

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Bio />
      <BlogPosts />
    </Layout>
  )
}

export default BlogIndex
