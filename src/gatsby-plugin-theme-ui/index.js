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
    heading: 'Inter, sans-serif',
    body: 'Karla, sans-serif',
    monospace: 'Overpass Mono, monospace',
    modes: {
      light: {
        heading: 'Inter, sans-serif',
        body: 'Karla, sans-serif',
        monospace: 'Overpass Mono, monospace',
      },
      dark: {
        body: 'system-ui, sans-serif',
        monospace: 'Space Mono, monospace',
        heading: 'Overpass Mono, monospace',
      },
    },
  },
  borders: [0, '1px solid'],
  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    text: '#26242C',
    background: '#fafafa',
    primary: 'hsl(325, 86%, 34%)',
    modes: {
      dark: {
        text: '#f8f9f9',
        background: '#1e2327',
        primary: 'hsl(55, 100%, 67%)',
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
      fontFamily: 'monospace',
      fontSize: [1, 2, 3],
      overflowX: 'auto',
      borderRadius: 5,
      padding: 4,
      marginY: 4,
    },
    a: {
      color: 'text',
      cursor: 'pointer',
      textDecoration: 'none',
      paddingBottom: 1,
      // ':after': {
      //   content: '""',
      //   position: 'absolute',
      //   left: 0,
      //   width: '100%',
      //   bottom: 0,
      //   background: 'hotpink',
      //   height: '2px',
      //   transition: 'width 0.3s ease-out',
      // },
      // backgroundImage: theme => `linear-gradient(
      //     ${theme.colors.primary},
      //      ${theme.colors.primary})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: '0 bottom',
      // backgroundSize: '100% 8%',
      // transition: 'all 0.2s ease-in-out',
      // ':hover,:focus': {
      //   backgroundSize: '100% 100%',
      //   color: 'background',
      // },
    },
  },
}
