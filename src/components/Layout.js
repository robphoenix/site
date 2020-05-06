import { Box, Flex, Heading } from '@theme-ui/components'
import { Link } from 'gatsby'

import React from 'react'

import Reset from './Reset'
import InterTypeface from './InterTypeface'
import ThemeSwitcher from './ThemeSwitcher'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <Reset />
      <InterTypeface />
      <Flex
        sx={{
          width: `100%`,
          alignItems: `center`,
          justifyContent: `space-between`,
          paddingX: [2, 3, 4],
          paddingY: [2, 3, 5],
        }}
      >
        <Box sx={{ p: 5, position: `fixed`, top: 0, left: 0 }}>
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
        </Box>
        <Flex sx={{ display: ['none', 'flex'] }}>
          <ThemeSwitcher />
        </Flex>
      </Flex>
      <Flex
        sx={{
          minHeight: `100%`,
          paddingX: [2, 3, 6],
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
      </Flex>
    </>
  )
}

export default Layout
