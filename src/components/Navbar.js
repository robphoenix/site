import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'

const navigation = [
  {
    label: `Home`,
    href: `/`,
  },
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

const Nav = props => <Box {...props} as="nav" />

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

const Navbar = () => {
  return (
    <Nav role="navigation" width={1}>
      <NavList width={1} justifyContent="space-around">
        {navigation.map(({ href, label }) => (
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

export default Navbar
