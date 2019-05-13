// @ts-nocheck
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text, Flex } from 'rebass'
import { Link } from 'gatsby'
import styled from 'styled-components'
import css from '@styled-system/css'

import theme from '../theme'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import GlobalStyle from './GlobalStyle'

const Fixed = styled(Flex)({
  top: 0,
  position: `fixed`,
})

const FixedRight = styled(Fixed)({
  right: `0`,
})

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle bg={theme.colors.bg} />
        <Fixed>
          <Link
            to="/"
            css={css({
              color: `text`,
              textDecoration: `none`,
              borderBottom: `3px solid`,
              borderColor: `bg`,
              marginLeft: 4,
              marginTop: 4,
              ':hover': {
                borderColor: `accent`,
              },
            })}
          >
            <Text
              as="h1"
              fontFamily="header"
              fontSize={4}
              fontWeight="normal"
              color="text"
            >
              {title}
            </Text>
          </Link>
        </Fixed>
        <FixedRight>
          <Navigation />
        </FixedRight>

        {children}
        <MobileNavigation />
      </>
    </ThemeProvider>
  )
}

export default Layout
