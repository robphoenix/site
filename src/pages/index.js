import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const query = graphql`
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

const Index = ({ location }) => {
  const { site } = useStaticQuery(query)
  const { keywords, description, title } = site.siteMetadata

  return (
    <Layout location={location}>
      <SEO title="Home" keywords={keywords} description={description} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default Index
