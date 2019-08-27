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
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          sx={{
            width: '100%',
            maxWidth: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingX: [1, 2, 3],
          }}
        >
          <About />

          <StyleGuide />
        </div>
      </div>
    </Layout>
  )
}

export default Index
