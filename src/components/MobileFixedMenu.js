/**@jsx jsx */
import { jsx } from 'theme-ui'

const MobileFixedMenu = ({ children }) => {
  return (
    <div
      sx={{
        width: '100%',
        // height: 4,
        padding: 3,
        display: ['flex', 'none'],
        zIndex: 1,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        backgroundColor: 'background',
        borderTop: 1,
        borderColor: 'primary',
        justifyContent: 'flex-end',
      }}
    >
      {children}
    </div>
  )
}

export default MobileFixedMenu
