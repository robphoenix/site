import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'

const BlogIndex = () => {
  return (
    <Layout>
      <SEO seoTitle="Writing" />
      <Articles />
    </Layout>
  )
}

export default BlogIndex
