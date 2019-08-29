import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const SEO = ({ meta, subtitle, seoDescription, lang = `en` }) => {
  const { title, description, keywords, author } = useSiteMetadata()

  const metaDescription = seoDescription || description
  const metaKeywords = keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${subtitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: subtitle,
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
          content: subtitle,
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
  subtitle: PropTypes.string.isRequired,
}

export default SEO
