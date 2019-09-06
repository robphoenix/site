/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import NavLink from './NavLink'
import { useAllMdx } from '../hooks/use-all-mdx'

const Posts = () => {
  const { edges } = useAllMdx()

  return (
    <>
      <ol
        sx={{
          listStyle: 'none',
        }}
      >
        {edges.map(edge => (
          <li
            key={edge.node.id}
            sx={{
              marginX: 0,
              marginBottom: 3,
              fontFamily: 'heading',
              color: 'text',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <NavLink
                to={edge.node.fields.slug}
                current={false}
                sx={{
                  fontSize: [1, 2, 3],
                  textTransform: 'uppercase',
                  letterSpacing: 'tracked',
                  color: 'text',
                  ':visited': {
                    color: 'primary',
                  },
                }}
              >
                {edge.node.frontmatter.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>

      <a href="https://blog.robphoenix.com/">Archive</a>
    </>
  )
}

export default Posts
