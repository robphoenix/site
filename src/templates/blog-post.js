// @ts-nocheck
import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const Title = styled.h1`
  color: #2ecc40;
`

const Date = styled.p`
  ${scale(-1 / 5)};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
  color: #aaaaaa;
`

const HorizontalRule = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <HorizontalRule />
        <Bio />
        <PostNavigation>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PostNavigation>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
