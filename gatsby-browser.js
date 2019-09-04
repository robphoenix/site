// custom typefaces
import 'typeface-overpass-mono'
import 'typeface-karla'
import 'typeface-space-mono'

// syntax highlighting
require('prismjs/themes/prism-tomorrow.css')

// wrap root element
import { ThemeProvider } from './src/context'
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
