import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    )
  }
}

export default Footer
