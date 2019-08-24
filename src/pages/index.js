/** @jsx jsx */
import { jsx } from 'theme-ui'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Colors from '../components/Colors'

const Index = () => {
  const { description } = useSiteMetadata()

  return (
    <Layout>
      <SEO seoTitle="Home" />
      <div
        sx={{
          width: '100%',
          maxWidth: 8,
        }}
      >
        <h2
          sx={{
            fontFamily: 'heading',
            color: 'text',
          }}
        >
          {description}
        </h2>
        <Colors />
      </div>
    </Layout>
  )
}

export default Index
