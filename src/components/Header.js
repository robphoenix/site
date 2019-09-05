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
        alignItems: ['flex-start', 'center'],
        justifyContent: 'space-between',
        marginBottom: [4, 5],
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
        <Title sx={{ marginRight: [0, 0, 3], marginBottom: [2, 2, 0] }} />
        <Navigation />
      </div>
      <CycleTheme sx={{ flex: 1 }} />
    </div>
  )
}

export default Header
