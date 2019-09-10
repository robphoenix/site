/** @jsx jsx */
import { jsx,  } from 'theme-ui'

import Navigation from './Navigation'
import Title from './Title'
import CycleTheme from './CycleTheme'

const Header = () => {
  return (
    <div
      sx={{
        marginBottom: 4,
        width: '100%',
        height: 5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          width: '100%',
          display: 'flex',
          alignItems: ['flex-start', 'center'],
          justifyContent: 'space-between',
          paddingX: [3, 4, 5],
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            flexDirection: ['column', 'column', 'row'],
            flex: 2,
          }}
        >
          <Title
            sx={{
              marginRight: [0, 0, 3],
              marginBottom: [2, 2, 0],
            }}
          />
          <Navigation />
        </div>
        <CycleTheme />
      </div>
    </div>
  )
}

export default Header
