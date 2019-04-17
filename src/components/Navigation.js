// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import theme from '../theme'
import styled from 'styled-components'
import { display, width } from 'styled-system'

const topLevelNavigation = [
  {
    label: `About`,
    href: `/about/`,
  },
  {
    label: `Blog`,
    href: `/blog/`,
  },
  {
    label: `Work`,
    href: `/work/`,
  },
  {
    label: `Art`,
    href: `/art/work/`,
  },
]

// const Nav = props => (
//   <Box
//     {...props}
//     as="nav"
//     css={{
//       display: 'none',
//       [`${theme.mediaQueries.mobile.sm}`]: {
//         display: 'block',
//       },
//     }}
//   />
// )

// const Nav = styled(Box)(props => ({
//   display: 'none',
//   [`${props.theme.mediaQueries.mobile.sm}`]: {
//     display: 'block',
//   },
// }))

const Nav = styled('nav')(display, width)

const NavList = props => (
  <Flex
    {...props}
    as="ul"
    css={{
      listStyle: 'none',
    }}
  />
)

const NavListItem = props => <Text {...props} as="li" />

const Navigation = () => {
  return (
    <Nav role="navigation" width={1} display={['none', 'flex']}>
      <NavList width={1} justifyContent="space-between">
        {topLevelNavigation.map(({ href, label }) => (
          <NavListItem key={label} fontFamily="header" fontSize={[3, 4, 5]}>
            <Link
              to={href}
              css={{
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  )
}

export default Navigation
