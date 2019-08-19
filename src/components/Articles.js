import React from 'react'
import { Link } from 'gatsby'
import { useAllMarkdownRemark } from '../hooks/use-all-markdown-remark'
import css from '@styled-system/css'
import { Box } from 'rebass'

const Articles = () => {
  const { edges } = useAllMarkdownRemark()

  return edges.map(({ node }) => {
    const { title, date } = node.frontmatter
    return (
      <ul>
        <Box
          as="li"
          key={node.fields.slug}
          mb={3}
          css={{
            listStyle: `none`,
          }}
        >
          <Link
            to={node.fields.slug}
            css={css({
              fontFamily: 'heading',
              fontSize: 3,
              color: `text`,
              textDecoration: `none`,
              borderBottom: `3px solid`,
              borderColor: `background`,
              ':hover': {
                borderColor: `primary`,
              },
            })}
          >
            {title}
          </Link>
        </Box>
      </ul>
    )
  })
}

export default Articles
