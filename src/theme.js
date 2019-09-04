export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 192, 256, 512],
  sizes: [0, 16, 24, 32, 64, 128, 256, 512, 768, 1024],
  fontSizes: [12, 14, 16, 18, 24, 32, 40, 48, 64],
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
    heading: 'Overpass Mono, monospace',
    body: 'Karla, sans-serif',
    modes: {
      elliot: {
        heading: 'Inter, sans-serif',
        body: 'system-ui, sans-serif',
      },
      marie: {
        heading: 'Space Mono, monospace',
        body: 'system-ui, sans-serif',
      },
    },
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
  initialColorMode: 'amara',
  useCustomProperties: true,
  colors: {
    text: '#1e2327',
    background: '#fafafa',
    primary: `#00b8a9`,
    modes: {
      elliot: {
        text: '#fafafa',
        background: '#1e2327',
        primary: '#0cf',
      },
      marie: {
        text: 'hotpink',
        background: 'whitesmoke',
        primary: 'black',
      },
    },
  },
}
