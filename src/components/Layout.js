// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import Navbar from '../components/Navbar'
import Footer from './Footer'

const fuschia = `#f012be`

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
          <Navbar />
          {header}
        </MainHeader>
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Layout
