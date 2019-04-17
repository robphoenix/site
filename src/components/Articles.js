import React from 'react'
import { Link } from 'gatsby'
import { useAllMarkdownRemark } from '../hooks/use-all-markdown-remark'

const Articles = () => {
  const { edges } = useAllMarkdownRemark()

  return edges.map(({ node }) => {
    const { title, date } = node.frontmatter

    return (
      <div key={node.fields.slug}>
        {date}
        <Link to={node.fields.slug}>{title}</Link>
      </div>
    )
  })
}

export default Articles
