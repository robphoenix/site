/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { Link } from 'gatsby'
import { useAllMarkdownRemark } from '../hooks/use-all-markdown-remark'
import css from '@styled-system/css'
import { Box } from 'rebass'
import NavLink from './NavLink'

const Articles = () => {
  const { edges } = useAllMarkdownRemark()

  return edges.map(({ node }) => {
    const { title, date } = node.frontmatter
    return (
      <ul key={node.id}>
        <Box
          as="li"
          key={node.fields.slug}
          mb={3}
          sx={{
            listStyle: `none`,
          }}
        >
          <NavLink to={node.fields.slug} current={false}>
            {title}
          </NavLink>
        </Box>
      </ul>
    )
  })
}

export default Articles
