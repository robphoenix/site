/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useAllMarkdownRemark } from '../hooks/use-all-markdown-remark'
import NavLink from './NavLink'

const Articles = () => {
  const { edges } = useAllMarkdownRemark()

  return edges.map(({ node }) => {
    const { title, date } = node.frontmatter
    return (
      <ul key={node.id}>
        <li
          key={node.fields.slug}
          sx={{
            marginBottom: 3,
            listStyle: `none`,
          }}
        >
          <NavLink to={node.fields.slug} current={false}>
            {title}
          </NavLink>
        </li>
      </ul>
    )
  })
}

export default Articles
