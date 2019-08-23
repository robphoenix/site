import { useStaticQuery, graphql } from 'gatsby'

export const useAllMarkdownRemark = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
