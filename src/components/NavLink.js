/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

const NavLink = ({ current, to, ...props }) => (
  <Link
    sx={{
      color: 'text',
      textDecoration: 'none',
      position: 'relative',
      fontFamily: 'heading',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      paddingBottom: 1,
      '::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        width: current ? '100%' : 0,
        bottom: 0,
        backgroundColor: 'primary',
        height: '2px',
        transition: 'width 0.3s ease-out',
      },
      ':hover::after,:focus::after,:active::after': {
        left: 0,
        right: 'auto',
        width: '100%',
      },
    }}
    to={to}
    {...props}
  />
)

export default NavLink
