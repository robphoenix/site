import React from 'react'
import { Flex, Box, Text } from 'rebass'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Tree from '../components/Tree'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Index = () => {
  const { description } = useSiteMetadata()
  return (
    <Layout>
      <SEO seoTitle="Home" />
      <Flex mt={[6, 6, 7]} flexDirection="column">
        <Flex justifyContent="center" mb={5}>
          <Text color="text" fontFamily="header" fontSize={7}>
            {description}
          </Text>
        </Flex>
        <Box
          width={600}
          ml="auto"
          mr={7}
          css={{
            bottom: 0,
          }}
        >
          <Tree />
        </Box>
      </Flex>
    </Layout>
  )
}

export default Index
