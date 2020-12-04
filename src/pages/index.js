import React from 'react'
import { Heading, Box, Flex } from '@theme-ui/components'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import StyleGuide from '../components/StyleGuide'
import Social from '../components/Social'
import Reset from '../components/Reset'
import InterTypeface from '../components/InterTypeface'
import ThemeSwitcher from '../components/ThemeSwitcher'
import MobileThemeSwitcher from '../components/MobileThemeSwitcher'
import { Stack } from '../components/Stack'

const Index = () => {
  return (
    <React.Fragment>
      <Reset />
      <InterTypeface />
      <SEO subtitle="Home" />
      <Stack
        space={4}
        as="header"
        sx={{
          p: 4,
          justifyContent: `center`,
          position: [`static`, `static`, `fixed`],
          top: 0,
          left: 0,
          // height: 200,
          width: `100%`,
          fontFamily: `heading`,
          color: `text`,
        }}
      >
        <Box
          as={Link}
          to="/"
          sx={{
            color: `text`,
            textDecoration: `none`,
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontSize: 4,
              fontWeight: `body`,
              // fontSize: 5,
              // fontWeight: `heading`,
              // color: `text`,
              textTransform: `uppercase`,
              letterSpacing: `mega`,
              // lineHeight: `solid`,
            }}
          >
            Rob Phoenix
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: 5,
            maxWidth: `10ch`,
            // fontFamily: `heading`,
            // fontSize: [6, 6, 5],
            // color: `text`,
            fontWeight: `heading`,
            // lineHeight: `title`,
            textTransform: `uppercase`,
            // letterSpacing: `tracked`,
            letterSpacing: `mega`,
          }}
        >
          Frontend Developer
        </Heading>
      </Stack>

      <Flex
        sx={{
          pl: 4,
          pb: 4,
          position: `fixed`,
          bottom: 0,
          left: 0,
        }}
      >
        <Box sx={{ display: [`none`, `none`, `flex`] }}>
          <ThemeSwitcher />
        </Box>
      </Flex>

      <Stack
        space={5}
        sx={{
          width: 900,
          flexDirection: `column`,
          p: 4,
          ml: [0, 0, 500],
          mt: [4, 4, `100vh`],
          mb: [4, 4, 0],
        }}
      >
        <StyleGuide />
        <Flex
          as="section"
          sx={{
            width: '100%',
            py: 5,
            justifyContent: `center`,
          }}
        >
          <Social />
        </Flex>
      </Stack>
      <Flex
        sx={{
          width: `100vw`,
          display: [`flex`, `flex`, `none`],
          zIndex: 1,
          bottom: 0,
          left: 0,
          right: 0,
          position: `fixed`,
          backgroundColor: `background`,
          borderTop: `3px solid`,
          borderColor: `text`,
          justifyContent: `center`,
          transition: `all 0.15s linear`,
        }}
      >
        <MobileThemeSwitcher />
      </Flex>
    </React.Fragment>
  )
}

export default Index
