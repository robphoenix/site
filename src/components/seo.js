import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const SEO = ({ meta, seoTitle, seoDescription, seoKeywords, lang }) => {
  const { title, description, keywords, author } = useSiteMetadata()

  const metaDescription = seoDescription || description
  const metaKeywords = [...seoKeywords, ...keywords]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${seoTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  seoDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  seoKeywords: PropTypes.arrayOf(PropTypes.string),
  seoTitle: PropTypes.string.isRequired,
}

export default SEO
