// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import { display, width } from 'styled-system'

const topLevelNavigation = [
  {
    label: `About`,
    href: `/about/`,
  },
  {
    label: `Writing`,
    href: `/writing/`,
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

const Nav = styled(Flex)(display, width)

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
    <Nav
      as="nav"
      role="navigation"
      width={1}
      display={['none', 'flex']}
      justifyContent="flex-end"
    >
      <NavList>
        {topLevelNavigation.map(({ href, label }) => (
          <NavListItem
            key={label}
            fontFamily="header"
            fontSize={[3, 4, 5]}
            mx={[2, 3, 4]}
          >
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
