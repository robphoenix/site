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
      paddingTop: [3, 4, 5],
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
      <Wrapper>
        <Content>
          <Header />
          {children}
        </Content>
      </Wrapper>
      <CycleTheme />
    </>
  )
}

export default Layout
