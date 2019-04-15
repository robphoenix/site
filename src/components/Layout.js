// @ts-nocheck
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text, Flex } from 'rebass'

import theme from '../theme'
import Navbar from './Navbar'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import GlobalStyle from './GlobalStyle'

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()
  const page = location.pathname.replace(/\//g, ``) || `home`
  const onHomePage = location.pathname === `/`

  return (
    <ThemeProvider theme={theme}>
      <>
        <Flex
          flexDirection={['column', 'row']}
          alignItems="baseline"
          justifyContent="space-around"
        >
          <GlobalStyle page={page} />
          <Flex width={'400px'} justifyContent="center">
            <Text
              as="h1"
              fontFamily="header"
              fontSize={6}
              fontWeight="bold"
              css={{
                opacity: onHomePage ? 0 : 1,
              }}
            >
              {title}
            </Text>
          </Flex>
          <Navbar />
        </Flex>
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
