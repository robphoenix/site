/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { Link } from 'gatsby'

import Navigation from './Navigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ThemeProvider } from '../context'
import Reset from './Reset'
import CycleTheme from './CycleTheme'
import Background from './Background'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <React.Fragment>
      <ThemeProvider>
        <Reset />
        <Background />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 4,
              backgroundColor: 'text',
              paddingX: [3, 4, 5],
              paddingY: [1, 2, 3],
            }}
          >
            <div
              sx={{
                padding: [1, 2, 3],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: 8,
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                <Link
                  to="/"
                  sx={{
                    color: 'background',
                    textDecoration: 'none',
                  }}
                >
                  <h1
                    sx={{
                      fontFamily: 'heading',
                      fontSize: [3, 4, 5],
                      fontWeight: 'normal',
                      color: 'background',
                      textTransform: 'uppercase',
                      letterSpacing: 'tracked',
                      lineHeight: 1,
                    }}
                  >
                    {title}
                  </h1>
                </Link>
                <Navigation />
              </div>

              <CycleTheme />
            </div>
          </div>
          <div sx={{ paddingX: [3, 4, 5] }}>{children}</div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
