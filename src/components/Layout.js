// @ts-nocheck
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text, Flex } from 'rebass'
import { Link } from 'gatsby'

import theme from '../theme'
import Navigation from './Navigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import GlobalStyle from './GlobalStyle'

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()
  const page = location.pathname.replace(/\//g, ``)
  const backgroundColour = theme.colors[page] || theme.colors.posts

  return (
    <ThemeProvider theme={theme}>
      <>
        <Flex
          flexDirection={['column', 'row']}
          alignItems="baseline"
          justifyContent="space-around"
        >
          <GlobalStyle bg={backgroundColour} />
          <Flex ml={3} width={1}>
            <Link
              to="/"
              css={{
                textDecoration: 'none',
              }}
            >
              <Text
                as="h1"
                fontFamily="header"
                fontSize={6}
                fontWeight="normal"
              >
                {title}
              </Text>
            </Link>
          </Flex>
          <Navigation />
        </Flex>
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout
