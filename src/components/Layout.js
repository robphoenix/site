/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import { ThemeProvider } from '../context'
import Reset from './Reset'
import CycleTheme from './CycleTheme'
import Background from './Background'
import Header from './Header'

const Content = props => (
  <div
    sx={{
      paddingX: [3, 4, 0],
    }}
    {...props}
  />
)

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <Reset />
        <Background />
        <Header />
        <Content>{children}</Content>
        <CycleTheme />
      </ThemeProvider>
    </>
  )
}

export default Layout
