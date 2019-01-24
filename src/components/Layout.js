// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const MainHeader = styled.h1`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: ${rhythm(0.3)};
  color: #f012be;
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const PostHeader = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: ${rhythm(0.3)};
  color: #ff4136;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <MainHeader>
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </MainHeader>
      )
    } else {
      header = (
        <PostHeader>
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </PostHeader>
      )
    }
    return (
      <Container>
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
