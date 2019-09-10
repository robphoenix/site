/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import Reset from './Reset'
import Header from './Header'
import InterTypeface from './InterTypeface'

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
      maxWidth: 9,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 5,
      paddingX: [3, 4, 0],
    }}
    {...props}
  />
)

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <InterTypeface />
      <Header />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

export default Layout
