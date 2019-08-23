import React from 'react'
import { Flex, Box } from 'rebass'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO seoTitle="Writing" />
      <Box width={1}>
        <Box width="auto" my={7} ml={8}>
          <Articles />
        </Box>
      </Box>
    </Layout>
  )
}

export default BlogIndex
