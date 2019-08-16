/** @jsx jsx */
import { jsx } from 'theme-ui'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Index = () => {
  const { description } = useSiteMetadata()

  return (
    <Layout>
      <SEO seoTitle="Home" />
      <div>{description}</div>
    </Layout>
  )
}

export default Index
