/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'

import Reset from './Reset'
import Header from './Header'
import InterTypeface from './InterTypeface'
import MobileFixedMenu from './MobileFixedMenu'
import CycleTheme from './CycleTheme'

const Content = props => (
  <div
    sx={{
      maxWidth: 9,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    {...props}
  />
)

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Reset />
      <InterTypeface />
      <div
        sx={{
          minHeight: '100%',
          padding: [2, 3, 5],
        }}
      >
        <Header />

        <Content>{children}</Content>

        <MobileFixedMenu>
          <CycleTheme />
        </MobileFixedMenu>
      </div>
    </React.Fragment>
  )
}

export default Layout
