/** @jsx jsx */
// @ts-nocheck
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import { Text, Flex } from 'rebass'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Global, css } from '@emotion/core'

import theme from '../theme'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'

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
      <div>
        <Global
          styles={css`
            html,
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: ${theme.colors.bg};
            }
            *,
            *::before,
            *::after {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Fixed>
          <Link
            to="/"
            sx={{
              color: 'text',
              textDecoration: 'none',
              borderBottom: '2px solid',
              borderColor: 'bg',
              marginLeft: 5,
              marginTop: 5,
              ':hover': {
                borderColor: 'text',
              },
            }}
          >
            <Text
              as="h1"
              sx={{
                fontFamily: 'header',
                fontSize: 4,
                fontWeight: 'normal',
                color: 'text',
              }}
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
      </div>
    </ThemeProvider>
  )
}

export default Layout
