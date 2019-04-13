import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'
import Navbar from './Navbar'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()

  const page = location.pathname.replace(/\//g, ``) || `home`
  const colour = theme.colors[page] || theme.colors.posts

  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const onHomePage = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          body: {
            backgroundColor: `${colour}`,
          },
        }}
      />
      <div
        css={{
          width: `100%`,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1
          css={{
            opacity: onHomePage ? 0 : 1,
          }}
        >
          {title}
        </h1>
        <Navbar />
      </div>
      {children}
    </ThemeProvider>
  )
}

export default Layout
