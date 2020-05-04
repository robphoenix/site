/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'

import React from 'react'

import Reset from './Reset'
import Header from './Header'
import InterTypeface from './InterTypeface'
import MobileFixedMenu from './MobileFixedMenu'
import CycleTheme from './CycleTheme'

const Content = props => (
  <Flex
    sx={{
      width: `100%`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
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
      <Flex
        sx={{
          minHeight: `100%`,
          paddingX: [2, 3, 6],
          paddingY: [2, 3, 5],
        }}
      >
        <Content>{children}</Content>

        <MobileFixedMenu>
          <CycleTheme />
        </MobileFixedMenu>
      </Flex>
    </React.Fragment>
  )
}

export default Layout
