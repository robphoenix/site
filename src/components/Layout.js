import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'
import Navbar from '../components/Navbar'

const Layout = ({ location, title, children }) => {
  const page = location.pathname.replace(/\//g, ``) || `home`
  const colour = theme.colors[page] || theme.colors.posts

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
          height: `100%`,
          width: `100%`,
        }}
      >
        {onHomePage ? `` : <h1>{title}</h1>}
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Layout
