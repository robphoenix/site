import { Box, Flex, Heading, Grid } from '@theme-ui/components'
import { Link } from 'gatsby'

import React from 'react'

import Reset from './Reset'
import InterTypeface from './InterTypeface'
import ThemeSwitcher from './ThemeSwitcher'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { Stack } from './Stack'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <Reset />
      <InterTypeface />
      <Stack
        space={[6, 0]}
        sx={{
          display: [`flex`, `grid`],
          gap: 2,
          gridTemplateColumns: `1fr 3fr 1fr`,
          gridTemplateRows: `100vh 1fr`,
          flexDirection: `column`,
          py: 5,
          px: [4, 0],
          justifyItems: `center`,
          height: `100vh`,
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
              fontSize: [1, 2, 3],
              fontWeight: `heading`,
              color: `text`,
              textTransform: `uppercase`,
              letterSpacing: `mega`,
              lineHeight: `solid`,
              display: `inline-block`,
            }}
          >
            {title}
          </Heading>
        </Box>

        <Flex sx={{ alignItems: `center` }}>
          <Heading
            as="h2"
            sx={{
              fontFamily: `heading`,
              fontSize: [5, 7, 8],
              color: `text`,
              fontWeight: `heading`,
              lineHeight: `title`,
              textTransform: `uppercase`,
              letterSpacing: `tracked`,
              maxWidth: `10ch`,
              lineHeight: 1.5,
            }}
          >
            frontend. developer. designer.
          </Heading>
        </Flex>
        <Box sx={{ display: [`none`, `flex`] }}>
          <ThemeSwitcher />
        </Box>
        {children}
      </Stack>
      {/* <Flex
        sx={{
          width: `100%`,
          alignItems: `baseline`,
          justifyContent: `space-between`,
          p: [2, 3, 5],
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
              fontSize: 3,
              fontWeight: `heading`,
              color: `text`,
              textTransform: `uppercase`,
              letterSpacing: `mega`,
              lineHeight: `solid`,
              display: `inline-block`,
            }}
          >
            {title}
          </Heading>
        </Box>

        <Flex sx={{ display: ['none', 'flex'] }}>
          <ThemeSwitcher />
        </Flex>
      </Flex> */}
      {/* <Flex
        sx={{
          minHeight: `100%`,
          paddingX: [2, 3, 5],
          paddingY: [2, 3, 5],
        }}
      >
        <Flex
          sx={{
            width: `100%`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          {children}
        </Flex>
        <Flex
          sx={{
            width: `100%`,
            padding: 3,
            display: [`flex`, `none`],
            zIndex: 1,
            bottom: 0,
            left: 0,
            right: 0,
            position: `fixed`,
            backgroundColor: `background`,
            borderTop: 1,
            borderColor: `primary`,
            justifyContent: `flex-end`,
          }}
        >
          <ThemeSwitcher />
        </Flex>
      </Flex> */}
    </>
  )
}

export default Layout
