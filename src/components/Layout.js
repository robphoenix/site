// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const fuschia = `#f012be`
const blue = `#0074d9`

const navItemPadding = rhythm(0.2)

const Global = createGlobalStyle`
  a {
    color: ${fuschia};
  }
  a:hover {
    text-decoration: underline;
  }
`

const MainHeader = styled.div`
  margin-bottom: ${rhythm(1.5)};
  text-transform: uppercase;
  color: ${fuschia};
`

const MainTitle = styled.h1`
  ${scale(1.5)};
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: ${rhythm(0.3)};
`
const Nav = styled.ul`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  letter-spacing: ${rhythm(0.2)};
  ${scale(0.1)};
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const NavLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  padding: ${navItemPadding};
  color: ${blue};
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

const NavItem = ({ linkTo, children }) => (
  <li>
    <NavLink to={linkTo}>{children}</NavLink>
  </li>
)

const ExternalLink = styled.a`
  padding: ${navItemPadding};
  color: ${blue};
`

const ExternalNavItem = ({ linkTo, children }) => (
  <li>
    <ExternalLink href={linkTo}>{children}</ExternalLink>
  </li>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <MainTitle>
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </MainTitle>
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
        <MainHeader>
          <Nav>
            <NavItem linkTo={'/about/'}>about</NavItem>
            <NavItem linkTo={'/projects/'}>projects</NavItem>
            <ExternalNavItem linkTo={'http://rm-phoenix.co.uk'}>
              art
            </ExternalNavItem>
          </Nav>
          {header}
        </MainHeader>

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
