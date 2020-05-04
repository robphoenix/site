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
      fontWeight: 'body',
      paddingBottom: 1,
      ':hover': {
        fontStyle: `italic`,
      },
      '::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        width: '100%',
        bottom: 0,
        backgroundColor: 'primary',
        height: '2px',
        transition: 'width 0.3s ease-out',
      },
      ':hover::after,:focus::after,:active::after': {
        left: 'auto',
        right: 0,
        width: 0,
      },
    }}
    to={to}
    {...props}
  />
)

export default NavLink
