/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useTheme } from '../context'

const CycleTheme = () => {
  const { mode, setMode, modes } = useTheme()

  return (
    <button
      onClick={() => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
      sx={{
        marginLeft: 'auto',
        textTransform: 'uppercase',
        letterSpacing: 'tracked',
        fontFamily: 'body',
        color: 'background',
        backgroundColor: 'text',
        border: 1,
        borderColor: 'text',
        cursor: 'pointer',
        height: 3,
        width: 5,
      }}
      title="Cycle Theme"
    >
      {mode}
    </button>
  )
}

export default CycleTheme
