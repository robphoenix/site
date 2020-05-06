import React from 'react'
import { Heading, Box } from '@theme-ui/components'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import StyleGuide from '../components/StyleGuide'
import { Stack } from '../components/Stack'

const Index = () => {
  return (
    <Layout>
      <SEO subtitle="Home" />

      <Stack
        space={6}
        align="center"
        sx={{
          width: `100%`,
          maxWidth: 900,
        }}
      >
        <Heading
          as="h2"
          sx={{
            fontFamily: `heading`,
            fontSize: 8,
            color: `text`,
            fontWeight: `heading`,
            lineHeight: `title`,
            textTransform: `uppercase`,
            letterSpacing: `tracked`,
            maxWidth: `10ch`,
            lineHeight: 1.5,
          }}
        >
          frontend. developer. designer.
        </Heading>

        <StyleGuide />
      </Stack>
    </Layout>
  )
}

export default Index
