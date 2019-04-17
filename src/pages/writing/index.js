import React from 'react'

import SEO from '../../components/seo'
import Bio from '../../components/Bio'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO seoTitle="Writing" />
      <Bio />
      <Articles />
    </Layout>
  )
}

export default BlogIndex
