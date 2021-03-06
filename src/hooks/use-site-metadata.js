import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            bio
            keywords
            author
            lang
            social {
              twitter
              github
              linkedin
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
