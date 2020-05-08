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
  boxShadows: {
    button: `5px 5px 0 black`,
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    modes: {
      light: {
        heading: 'Inter, system-ui, sans-serif',
        body: 'Inter, system-ui, sans-serif',
      },
      dark: {
        heading: 'Overpass Mono, monospace',
        body: 'Karla, sans-serif',
      },
      araf: {
        heading: `Space Mono, monospace`,
        body: `system-ui, sans-serif`,
      },
    },
  },
  borders: [0, '1px solid'],
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    text: `hsl(248, 31%, 20%)`,
    primary: 'hsl(180, 95%, 20%)',
    background: `hsl(60, 100%, 100%)`,
    modes: {
      dark: {
        text: `hsl(60, 100%, 100%)`,
        primary: `hsl(32, 100%, 51%)`,
        background: `hsl(240, 8%, 9%)`,
      },
      araf: {
        text: `hsl(346, 76%, 28%)`,
        primary: `hsl(346, 86%, 45%)`,
        background: `hsl(22, 66%, 94%)`,
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
