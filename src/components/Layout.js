/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, ColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'

import theme from '../theme'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import ColorModeToggle from './ColorModeToggle'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <div
        sx={{
          height: '100vh',
          backgroundColor: 'background',
        }}
      >
        <Global
          styles={css`
            html,
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
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

        <div
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: ['center', 'flex-start'],
            padding: 4,
          }}
        >
          <Link
            to="/"
            sx={{
              color: 'text',
              textDecoration: 'none',
              marginX: 4,
            }}
          >
            <h1
              sx={{
                fontFamily: 'header',
                fontSize: [4, 5],
                fontWeight: 'normal',
                color: 'text',
                padding: 0,
                textTransform: 'uppercase',
                letterSpacing: 'tracked',
              }}
            >
              {title}
            </h1>
          </Link>
          <Navigation />
          <ColorModeToggle />
        </div>

        {children}

        <MobileNavigation />
      </div>
    </ThemeProvider>
  )
}

export default Layout
