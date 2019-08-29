/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useAllMarkdownRemark } from '../hooks/use-all-markdown-remark'
import NavLink from './NavLink'

const Articles = () => {
  const { edges } = useAllMarkdownRemark()

  return (
    <div>
      <ul
        sx={{
          listStyle: 'none',
        }}
      >
        {edges.map(edge => (
          <li
            key={edge.node.id}
            sx={{
              marginBottom: 2,
              fontFamily: 'heading',
              color: 'text',
            }}
          >
            <span>{edge.node.frontmatter.date}</span>
            <NavLink
              to={edge.node.fields.slug}
              current={false}
              sx={{
                fontSize: [1, 2, 3],
                textTransform: 'uppercase',
                letterSpacing: 'tracked',
                color: 'text',
              }}
            >
              {edge.node.frontmatter.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )

  // return edges.map(({ node }) => {
  //   const { title, date } = node.frontmatter
  //   return (
  //     <ul key={node.id}>
  //       <li
  //         key={node.fields.slug}
  //         sx={{
  //           marginBottom: 3,
  //           listStyle: `none`,
  //         }}
  //       >
  //         <NavLink to={node.fields.slug} current={false}>
  //           {title}
  //         </NavLink>
  //       </li>
  //     </ul>
  //   )
  // })
}

export default Articles
