/** @jsx jsx */
import { jsx } from 'theme-ui'

import NavLink from './NavLink'

const currentPage = label =>
  label.toLowerCase() ===
  window.location.pathname.replace(/\//g, ``).toLowerCase()

const Navigation = () => {
  return (
    <nav
      role="navigation"
      sx={{
        display: ['none', 'flex'],
        alignItems: 'center',
        height: 4,
      }}
    >
      <NavLink
        to="/blog/"
        current={currentPage('blog')}
        sx={{
          fontSize: 3,
        }}
      >
        blog
      </NavLink>
    </nav>
  )
}

export default Navigation
