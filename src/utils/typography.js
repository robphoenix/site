import Typography from 'typography'
// import CodePlugin from 'typography-plugin-code'

const theme = {
  baseFontSize: `18px`,
  headerFontFamily: [`Space Mono`, `monospace`],
  bodyFontFamily: [`Karla`, `sans-serif`],
  baseLineHeight: 1.5,
  blockMarginBottom: 0.85,
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
