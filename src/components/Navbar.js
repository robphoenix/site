// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const Nav = styled.ul`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: flex;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  letter-spacing: ${rhythm(0.2)};
  ${scale(0.1)};
`

const NavLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  padding-left: ${rhythm(0.1)};
  padding-right: ${rhythm(1.5)};
  color: #0074d9;
`

const NavItem = ({ linkTo, children }) => (
  <li>
    <NavLink to={linkTo}>{children}</NavLink>
  </li>
)

function Navbar() {
  return (
    <Nav>
      <NavItem linkTo={'/projects/'}>projects</NavItem>
      <NavItem linkTo={'/art/work/'}>art</NavItem>
    </Nav>
  )
}

export default Navbar
