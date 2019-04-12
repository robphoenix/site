import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'

import theme from '../theme'
import Navbar from '../components/Navbar'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ location, children }) => {
  const { site } = useStaticQuery(query)
  const title = site.siteMetadata.title

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
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Layout
