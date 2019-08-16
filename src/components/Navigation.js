/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import topLevelNavigation from '../data/top-level-navigation'

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
              fontFamily: 'header',
              fontSize: 3,
              marginX: 3,
              textTransform: 'uppercase',
              letterSpacing: 'tracked',
            }}
          >
            <Link
              to={href}
              sx={{
                color: 'text',
                textDecoration: 'none',
                borderBottom: 2,
                borderColor: 'background',
                ':hover': {
                  borderColor: 'primary',
                },
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
