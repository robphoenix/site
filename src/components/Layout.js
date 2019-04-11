// @ts-nocheck
import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'
import Navbar from '../components/Navbar'

const Layout = ({ location, title, children }) => {
  const page = location.pathname.replace(/\//g, '') || 'home'
  const colour = theme.colors[page] || theme.colors.posts

  // const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {
  //   header = <Link to={`/`}>{title}</Link>
  // } else {
  //   header = <Link to={`/`}>{title}</Link>
  // }
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            background-color: ${colour};
          }
        `}
      />
      <div
        css={css`
          height: 100%;
          width: 100%;
        `}
      >
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  )
}

// class Layout extends React.Component {
//   render() {
//     const { location, title, children, bg } = this.props

//     return (
//       <div
//         css={css`
//           background-color: ${bg};
//           height: 100%;
//           width: 100%;
//         `}
//       >
//         <Navbar />
//         {header}
//         {children}
//       </div>
//     )
//   }
// }

export default Layout
