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
          display: [`flex`, `flex`, `grid`],
          gap: 2,
          gridTemplateColumns: `1fr 3fr 1fr`,
          gridTemplateRows: `100vh 1fr`,
          flexDirection: `column`,
          px: [4, 2, 0],
          justifyItems: `center`,
          height: `100vh`,
        }}
      >
        <Box
          as={Link}
          to="/"
          sx={{
            py: 5,
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
            rob phoenix
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
            }}
          >
            frontend. developer. designer.
          </Heading>
        </Flex>
        <Box sx={{ py: 5, display: [`none`, `none`, `flex`] }}>
          <ThemeSwitcher />
        </Box>
        {children}
      </Stack>
    </>
  )
}

export default Layout
