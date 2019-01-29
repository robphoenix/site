// @ts-nocheck
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

const Title = styled.h1`
  color: #2ecc40;
  text-transform: uppercase;
  letter-spacing: ${rhythm(1 / 10)};
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" description={`About ${siteTitle}`} />
        <Title>About</Title>
        <Bio />
      </Layout>
    )
  }
}

export default AboutPage

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
