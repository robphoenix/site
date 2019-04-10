// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <ul>
      <li>
        <Link to={'/blog/'}>blog</Link>
      </li>
      <li>
        <Link to={'/projects/'}>projects</Link>
      </li>
      <li>
        <Link to={'/art/work/'}>art</Link>
      </li>
    </ul>
  )
}

export default Navbar
