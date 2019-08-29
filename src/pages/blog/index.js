import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Posts from '../../components/Posts'

const BlogIndex = () => {
  return (
    <Layout>
      <SEO subtitle="Blog" />
      <Posts />
    </Layout>
  )
}

export default BlogIndex
