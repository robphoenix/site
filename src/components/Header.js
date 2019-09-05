/** @jsx jsx */
import { jsx } from 'theme-ui'

import Navigation from './Navigation'
import Title from './Title'
import CycleTheme from './CycleTheme'

const Header = () => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: [4, 5],
        paddingX: [3, 4, 0],
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          flex: 2,
        }}
      >
        <Title sx={{ marginRight: 3 }} />
        <Navigation />
      </div>
      <CycleTheme sx={{ flex: 1 }} />
    </div>
  )
}

export default Header
