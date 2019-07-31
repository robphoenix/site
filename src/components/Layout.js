/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'

import theme from '../theme'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 200px',
          gridTemplateRows: '100px 100px 1fr',
          height: '100vh',
        }}
      >
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
        <div
          sx={{
            gridColumn: '1/1',
            gridRow: '1/1',
            justifySelf: 'center',
            alignSelf: 'center',
            top: 0,
            left: 0,
          }}
        >
          <h1
            sx={{
              fontFamily: 'header',
              fontSize: 4,
              fontWeight: 'normal',
              color: 'text',
            }}
          >
            <Link
              to="/"
              sx={{
                color: 'text',
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
          </h1>
        </div>

        <Navigation />
        <div
          sx={{
            gridColumn: '2/3',
            gridRow: '1/-1',
          }}
        >
          {children}
        </div>
        <MobileNavigation />
      </div>
    </ThemeProvider>
  )
}

export default Layout
