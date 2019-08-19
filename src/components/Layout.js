/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Link } from 'gatsby'
import merge from 'lodash.merge'
import get from 'lodash.get'

import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import baseTheme from '../theme'
import Reset from './Reset'

const modes = ['light', 'dark']

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    fonts: get(baseTheme.fonts.modes, mode, baseTheme.fonts),
  })

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  const [mode, setMode] = React.useState(modes[0])
  const theme = getTheme(mode)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
            <button
              onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
              }}
            >
              Toggle {mode === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          {children}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
