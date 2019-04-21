// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import { display, width } from 'styled-system'

import topLevelNavigation from '../data/top-level-navigation'

const Nav = styled(Flex)(display, width)

const Navigation = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      width={1}
      display={['none', 'flex']}
      justifyContent="flex-end"
    >
      <Flex
        as="ul"
        css={{
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <Text
            as="li"
            key={label}
            fontFamily="header"
            fontSize={[3, 4, 5]}
            mx={[2, 3, 4]}
          >
            <Link
              to={href}
              css={{
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          </Text>
        ))}
      </Flex>
    </Nav>
  )
}

export default Navigation
