/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import topLevelNavigation from '../data/top-level-navigation'

const MobileNavigation = () => {
  return (
    <nav
      role="navigation"
      sx={{
        height: 4,
        display: ['flex', 'none'],
        alignItems: 'center',
        borderTop: 1,
        borderColor: 'text',
        zIndex: 1,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
      }}
    >
      <ul
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <li
            key={label}
            sx={{
              fontFamily: 'header',
              fontSize: 3,
              marginX: [2, 3],
              color: 'text',
            }}
          >
            <Link
              to={href}
              sx={{
                textDecoration: 'none',
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

export default MobileNavigation
