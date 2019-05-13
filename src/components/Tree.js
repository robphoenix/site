// @ts-nocheck
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query {
    tree: file(relativePath: { eq: "tree.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tree = () => {
  const { tree } = useStaticQuery(query)
  return <Img fluid={tree.childImageSharp.fluid} title="tree" />
}

export default Tree
