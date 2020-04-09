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
      <Header />
      <div
        sx={{
          minHeight: '100%',
          paddingX: [2, 3, 6],
          paddingY: [2, 3, 5],
        }}
      >
        <Content>{children}</Content>

        <MobileFixedMenu>
          <CycleTheme />
        </MobileFixedMenu>
      </div>
    </React.Fragment>
  )
}

export default Layout
