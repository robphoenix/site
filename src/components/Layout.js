/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { Link } from 'gatsby'

import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
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
              padding: [2, 3],
              borderBottom: 1,
              borderColor: 'text',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              sx={{
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
                    color: 'text',
                    textDecoration: 'none',
                  }}
                >
                  <h1
                    sx={{
                      fontFamily: 'heading',
                      fontSize: [3, 4, 5],
                      fontWeight: 'normal',
                      color: 'text',
                      textTransform: 'uppercase',
                      letterSpacing: 'tracked',
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
          {children}
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
