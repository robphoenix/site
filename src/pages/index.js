import React from 'react'
import { Flex, Box, Text } from 'rebass'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Tree from '../components/Tree'

const Index = () => {
  return (
    <Layout>
      <SEO seoTitle="Home" />
      <Flex mt={[6, 6, 7]} flexDirection="column">
        <Flex justifyContent="center" mb={5}>
          <Text color="text" fontFamily="header" fontSize={4}>
            description: &ldquo;I&rsquo;m a frontend developer,
            <br />
            working in rural North Wales&rdquo;
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
