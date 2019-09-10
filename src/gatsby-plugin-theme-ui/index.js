import nightOwl from '@theme-ui/prism/presets/night-owl.json'

export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 192, 256, 512],
  sizes: [0, 16, 24, 32, 64, 96, 128, 256, 512, 768, 1024],
  fontSizes: [12, 14, 16, 18, 24, 32, 40, 48, 64],
  fontWeights: {
    heading: 700,
    body: 400,
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    tracked: '0.1em',
    mega: '0.25em',
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Karla, sans-serif',
    monospace: 'Overpass Mono, monospace',
    modes: {
      light: {
        heading: 'Inter, system-ui, sans-serif',
        body: 'Karla, sans-serif',
        monospace: 'Overpass Mono, monospace',
      },
      dark: {
        body: 'Inter, system-ui, sans-serif',
        monospace: 'Karla, sans-serif',
        heading: 'Overpass Mono, monospace',
      },
    },
  },
  borders: [0, '1px solid'],
  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    text: '#1e2327',
    background: '#fafafa',
    primary: `#00b8a9`,
    modes: {
      dark: {
        text: '#fafafa',
        background: '#1e2327',
        primary: '#0cf',
      },
    },
  },
  styles: {
    h1: {
      fontSize: 32,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
    pre: {
      ...nightOwl,
    },
    a: {
      color: 'text',
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundImage: theme => `linear-gradient(
          ${theme.colors.primary},
           ${theme.colors.primary})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 bottom',
      backgroundSize: '100% 8%',
      transition: 'all 0.2s ease-in-out',
      ':hover,:focus': {
        backgroundSize: '100% 100%',
        color: 'background',
      },
    },
  },
}
