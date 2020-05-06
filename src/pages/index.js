import React from 'react'
import { Heading, Box, Flex } from '@theme-ui/components'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import StyleGuide from '../components/StyleGuide'
import Social from '../components/Social'

const Index = () => {
  return (
    <Layout>
      <SEO subtitle="Home" />

      <Flex sx={{ width: `100%`, flexDirection: `column`, gridColumn: `2/3` }}>
        <StyleGuide />
        <Flex
          as="section"
          sx={{
            width: '100%',
            paddingY: 5,
            borderTop: `1px solid`,
            borderColor: 'text',
            justifyContent: `center`,
          }}
        >
          <Social />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Index
