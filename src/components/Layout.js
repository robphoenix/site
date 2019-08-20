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

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <React.Fragment>
      <ThemeProvider>
        <Reset />
        <div
          sx={{
            height: '100vh',
            backgroundColor: 'background',
          }}
        >
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
                  fontFamily: 'heading',
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
            <CycleTheme />
          </div>
          {children}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
