// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Navbar from '../components/Navbar'

class Layout extends React.Component {
  render() {
    const { location, title, children, bg } = this.props
    console.log({ bg })

    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <Link to={`/`}>{title}</Link>
    } else {
      header = <Link to={`/`}>{title}</Link>
    }
    return (
      <div
        css={css`
          background-color: ${bg};
          height: 100%;
          width: 100%;
        `}
      >
        <Navbar />
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
