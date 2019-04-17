import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const WorkPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO seoTitle="About" />
      <h1>Work</h1>
    </Layout>
  )
}

export default WorkPage
