// @ts-nocheck
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import {
  display,
  width,
  height,
  color,
  borderTop,
  zIndex,
  right,
  bottom,
  left,
  position,
} from 'styled-system'

import topLevelNavigation from '../data/top-level-navigation'

const Nav = styled(Flex)(
  display,
  width,
  height,
  color,
  borderTop,
  zIndex,
  right,
  bottom,
  left,
  position
)

const MobileNavigation = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      width={1}
      height={4}
      display={['flex', 'none']}
      alignItems="center"
      bg="bg"
      borderTop="1px solid"
      borderColor="text"
      zIndex="1"
      bottom="0"
      left="0"
      right="0"
      position="fixed"
    >
      <Flex
        as="ul"
        width={1}
        justifyContent="space-around"
        css={{
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <Text
            as="li"
            key={label}
            fontFamily="header"
            fontSize={3}
            mx={[2, 3]}
            color="text"
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

export default MobileNavigation
