/** @jsx jsx */
import { jsx } from 'theme-ui'

import Navigation from './Navigation'
import Title from './Title'

const Header = () => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: [4, 5],
        paddingX: [3, 4, 0],
      }}
    >
      <div
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <Title />
        <Navigation />
      </div>
    </div>
  )
}

export default Header
