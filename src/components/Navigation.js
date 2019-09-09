/** @jsx jsx */
import { jsx } from 'theme-ui'

import NavLink from './NavLink'

const currentPage = label =>
  label.toLowerCase() ===
  (typeof window !== `undefined` &&
    window.location.pathname.replace(/\//g, ``).toLowerCase())

const Navigation = () => {
  return (
    <nav
      role="navigation"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavLink
        to="/blog/"
        current={currentPage('blog')}
        sx={{
          fontSize: 1,
        }}
      >
        blog
      </NavLink>
    </nav>
  )
}

export default Navigation
