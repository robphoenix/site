import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Index = ({ location }) => {
  const { site } = useStaticQuery(query)
  const { title } = site.siteMetadata

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <h1>{title}</h1>
    </Layout>
  )
}

export default Index
