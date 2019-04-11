// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <ul>
      <li>
        <Link to={'/blog/'}>
          <p>blog</p>
        </Link>
      </li>
      <li>
        <Link to={'/projects/'}>
          <p>projects</p>
        </Link>
      </li>
      <li>
        <Link to={'/art/work/'}>
          <p>art</p>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
