/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import Reset from './Reset'
import CycleTheme from './CycleTheme'
import Header from './Header'

const Wrapper = props => (
  <div
    sx={{
      display: 'flex',
    }}
    {...props}
  />
)

const Content = props => (
  <div
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingX: [3, 4, 6],
      paddingTop: [4, 4, 5],
      marginBottom: 5,
      zIndex: 9,
    }}
    {...props}
  />
)

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <Content>
        <Header />
        {children}
      </Content>
    </>
  )
}

export default Layout
