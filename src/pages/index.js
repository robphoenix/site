import React from 'react'
import { Heading, Box, Flex, Select } from '@theme-ui/components'
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
    <>
      <Reset />
      <InterTypeface />
      <Stack
        space={6}
        sx={{
          display: [`flex`, `flex`, `grid`],
          gap: 2,
          gridTemplateColumns: `1fr 3fr 1fr`,
          gridTemplateRows: `100vh 1fr`,
          flexDirection: `column`,
          px: 4,
          justifyItems: `center`,
        }}
      >
        <Box
          as={Link}
          to="/"
          sx={{
            py: [4, 4, 5],
            color: `text`,
            textDecoration: `none`,
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontSize: 4,
              fontWeight: `heading`,
              color: `text`,
              textTransform: `uppercase`,
              letterSpacing: `mega`,
              lineHeight: `solid`,
              display: `inline-block`,
            }}
          >
            rob phoenix
            <Box as="span" sx={{ color: `primary` }}>
              .
            </Box>{' '}
          </Heading>
        </Box>

        <Flex sx={{ alignItems: `center` }}>
          <Heading
            as="h2"
            sx={{
              fontFamily: `heading`,
              fontSize: [6, 6, 8],
              color: `text`,
              fontWeight: `heading`,
              lineHeight: `title`,
              textTransform: `uppercase`,
              letterSpacing: `tracked`,
              maxWidth: `10ch`,
              lineHeight: 1.5,
              mt: [0, 0, 6],
            }}
          >
            frontend
            <Box as="span" sx={{ color: `primary` }}>
              .
            </Box>{' '}
            developer
            <Box as="span" sx={{ color: `primary` }}>
              .
            </Box>{' '}
            designer
            <Box as="span" sx={{ color: `primary` }}>
              .
            </Box>
          </Heading>
        </Flex>
        <Box sx={{ py: [4, 4, 5], display: [`none`, `none`, `flex`] }}>
          <ThemeSwitcher />
        </Box>
        <SEO subtitle="Home" />

        <Stack
          space={5}
          sx={{ width: `100%`, flexDirection: `column`, gridColumn: `2/3` }}
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
            width: '100vw',
            display: ['flex', `flex`, 'none'],
            zIndex: 1,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'fixed',
            backgroundColor: 'background',
            borderTop: `3px solid`,
            borderColor: 'primary',
            justifyContent: `center`,
          }}
        >
          <MobileThemeSwitcher />
        </Flex>
      </Stack>
    </>
  )
}

export default Index
