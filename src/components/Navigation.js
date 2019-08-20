/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import topLevelNavigation from '../data/top-level-navigation'

const NavLink = props => (
  <Link
    sx={{
      color: 'text',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        width: 0,
        bottom: 0,
        backgroundColor: 'primary',
        height: '2px',
        transition: 'width 0.3s ease-out',
      },
      '&:hover::after': {
        left: 0,
        right: 'auto',
        width: '100%',
      },
    }}
    {...props}
  />
)

const Navigation = () => {
  return (
    <nav
      role="navigation"
      sx={{
        display: ['none', 'flex'],
      }}
    >
      <ul
        sx={{
          display: 'flex',
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <li
            key={label}
            sx={{
              fontFamily: 'heading',
              fontSize: 3,
              marginX: 3,
              textTransform: 'uppercase',
              letterSpacing: 'tracked',
            }}
          >
            <NavLink to={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
