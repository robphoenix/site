import { useStaticQuery, graphql } from 'gatsby'

export const useAllMdx = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
              id
            }
          }
        }
      }
    `
  )
  return allMdx
}
