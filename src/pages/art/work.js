import React from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

const ArtWorkPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO seoTitle="Artwork" />
      <h1>Art Work</h1>
    </Layout>
  )
}

export default ArtWorkPage
