import React from 'react'

import Layout from '../../components/Layout'
import { graphql } from 'gatsby'

class ArtWorksPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Art Work</h1>
      </Layout>
    )
  }
}

export default ArtWorksPage

export const artWorksQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
