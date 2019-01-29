// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import Social from '../components/Social'
import Navbar from '../components/Navbar'

const fuschia = `#f012be`

const Global = createGlobalStyle`
  a {
    color: ${fuschia};
  }
  a:hover {
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.div`
  margin-bottom: ${rhythm(1.5)};
  text-transform: uppercase;
  color: ${fuschia};
`

const MainHeader = styled.h1`
  ${scale(1.5)};
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: ${rhythm(0.3)};
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const PostHeader = styled.h3`
  font-family: 'Open Sans', sans-serif;
  ${scale(0.7)};
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: ${rhythm(0.3)};
  color: ${fuschia};
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
        <Global />
        <HeaderWrapper>
          <Navbar />
          {header}
        </HeaderWrapper>
        {children}
        <footer>
          <Social />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
