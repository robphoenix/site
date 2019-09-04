/** @jsx jsx */
import { jsx } from 'theme-ui'

import Navigation from './Navigation'
import Title from './Title'

const Header = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: 'text',
        paddingX: [3, 4, 0],
        height: 4,
      }}
    >
      <div
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          maxWidth: 8,
        }}
      >
        <Title />
        <Navigation />
      </div>
    </div>
  )
}

export default Header
