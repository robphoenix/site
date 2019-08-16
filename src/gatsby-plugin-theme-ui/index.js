export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 192, 256, 512],
  sizes: [0, 16, 24, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 18, 24, 32, 40, 48, 64, 72],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    body: 'Karla, sans-serif',
    header: 'Overpass Mono, monospace',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    text: '#1e2327',
    background: '#fafafa',
    primary: `#00b8a9`,
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
}
