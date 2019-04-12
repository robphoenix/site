import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { fontSize } from 'styled-system'

const NavItem = styled.li`
  ${fontSize}
`

const NavLink = ({ to, children }) => (
  <NavItem fontSize={[3, 4, 5]}>
    <Link
      to={to}
      css={{
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  </NavItem>
)

const pages = [
  { name: `Home`, to: `/` },
  { name: `About`, to: `/about/` },
  { name: `Blog`, to: `/blog/` },
  { name: `Work`, to: `/work/` },
  { name: `Art`, to: `/art/work/` },
]

const Navbar = () => {
  return (
    <ul
      css={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {pages.map(page => {
        return (
          <NavLink to={page.to}>
            <p>{page.name}</p>
          </NavLink>
        )
      })}
    </ul>
  )
}

export default Navbar
