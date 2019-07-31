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
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: [6, 6, 7],
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 5,
          }}
        >
          <span
            sx={{
              color: 'text',
              fontFamily: 'header',
              fontSize: 7,
            }}
          >
            {description.split(', ')[0]},
            <br />
            {description.split(', ')[1]}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Index
