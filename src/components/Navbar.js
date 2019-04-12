import React from 'react'
import { Link } from 'gatsby'
import css from '@styled-system/css'

const NavLink = ({ to, children }) => (
  <li
    css={css({
      fontSize: [3, 4, 5],
    })}
  >
    <Link
      to={to}
      css={{
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  </li>
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
