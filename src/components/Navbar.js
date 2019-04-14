import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { fontSize } from 'styled-system'

const pages = [
  { name: `Home`, to: `/` },
  { name: `About`, to: `/about/` },
  { name: `Blog`, to: `/blog/` },
  { name: `Work`, to: `/work/` },
  { name: `Art`, to: `/art/work/` },
]

const NavList = styled.div({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
})

const NavItem = styled.li(fontSize)

const NavLink = styled(Link)({
  textDecoration: 'none',
})

const Navbar = () => {
  return (
    <NavList>
      {pages.map(page => (
        <NavItem fontSize={[4, 5, 6]}>
          <NavLink to={page.to}>{page.name}</NavLink>
        </NavItem>
      ))}
    </NavList>
  )
}

export default Navbar
