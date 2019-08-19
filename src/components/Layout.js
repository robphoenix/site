/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { Link } from 'gatsby'
import merge from 'lodash.merge'
import get from 'lodash.get'

import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { ThemeProvider, useTheme } from '../context/theme'

import baseTheme from '../theme'
import Reset from './Reset'
import ColorModeToggle from './ColorModeToggle'

// const modes = ['light', 'dark']

// const getTheme = mode =>
//   merge({}, baseTheme, {
//     colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
//     fonts: get(baseTheme.fonts.modes, mode, baseTheme.fonts),
//   })

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  // const [mode, setMode] = React.useState(modes[0])
  // const theme = getTheme(mode)

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
            <ColorModeToggle />
          </div>
          {children}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
