/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import { ThemeProvider } from '../context'
import Reset from './Reset'
import CycleTheme from './CycleTheme'
import Background from './Background'
import Header from './Header'

const Wrapper = props => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
    {...props}
  />
)
const Content = props => (
  <div
    sx={{
      width: '100%',
      maxWidth: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
        <CycleTheme />
      </ThemeProvider>
    </>
  )
}

export default Layout
