/** @jsx jsx */
import { jsx } from 'theme-ui'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import StyleGuide from '../components/StyleGuide'

const Index = () => {
  return (
    <Layout>
      <SEO subtitle="Home" />
      <StyleGuide />
    </Layout>
  )
}

export default Index
