import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO seoTitle="About" />
      <h1>About</h1>
    </Layout>
  )
}

export default AboutPage
