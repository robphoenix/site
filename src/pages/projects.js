import React from 'react'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Projects</h1>
      </Layout>
    )
  }
}

export default ProjectsPage

export const projectsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
