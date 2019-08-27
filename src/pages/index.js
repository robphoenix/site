/** @jsx jsx */
import { jsx } from 'theme-ui'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import StyleGuide from '../components/StyleGuide'

const Index = () => {
  const { description } = useSiteMetadata()

  return (
    <Layout>
      <SEO seoTitle="Home" />
      <div
        sx={{
          width: '100%',
          maxWidth: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr',
          }}
        >
          <h2
            sx={{
              fontFamily: 'body',
              color: 'text',
            }}
          >
            {description}
          </h2>
        </div>
        <StyleGuide />
      </div>
    </Layout>
  )
}

export default Index
