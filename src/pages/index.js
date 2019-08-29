/** @jsx jsx */
import { jsx } from 'theme-ui'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import StyleGuide from '../components/StyleGuide'
import About from '../components/About'

const Index = () => {
  return (
    <Layout>
      <SEO seoTitle="Home" />
      <About />
      <StyleGuide />
    </Layout>
  )
}

export default Index
