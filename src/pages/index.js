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
          fontFamily: 'body',
          color: 'text',
        }}
      >
        {description}
      </div>
    </Layout>
  )
}

export default Index
