// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import { display, width } from 'styled-system'
import css from '@styled-system/css'

import topLevelNavigation from '../data/top-level-navigation'

const Nav = styled(Flex)(display, width)

const Navigation = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      display={['none', 'flex']}
      justifyContent="flex-end"
    >
      <Flex
        as="ul"
        alignItems="flex-end"
        flexDirection="column"
        mt={5}
        mr={5}
        css={{
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <>
            <Link
              to={href}
              css={css({
                color: `text`,
                textDecoration: `none`,
                borderBottom: `3px solid`,
                borderColor: `bg`,
                marginBottom: 3,
                ':hover': {
                  borderColor: `accent`,
                },
              })}
            >
              <Text as="li" key={label} fontFamily="header" fontSize={3}>
                {label}
              </Text>
            </Link>
          </>
        ))}
      </Flex>
    </Nav>
  )
}

export default Navigation
