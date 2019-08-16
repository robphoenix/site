/** @jsx jsx */
import { jsx } from 'theme-ui'
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
    <Nav as="nav" role="navigation">
      <ul
        sx={{
          display: 'flex',
          listStyle: 'none',
        }}
      >
        {topLevelNavigation.map(({ href, label }) => (
          <Text
            as="li"
            key={label}
            sx={{
              fontFamily: 'header',
              fontSize: 3,
              marginX: 3,
              textTransform: 'uppercase',
              letterSpacing: 'tracked',
            }}
          >
            <Link
              to={href}
              sx={{
                color: `text`,
                textDecoration: `none`,
                borderBottom: `2px solid`,
                borderColor: `bg`,
                ':hover': {
                  borderColor: `accent`,
                },
              }}
            >
              {label}
            </Link>
          </Text>
        ))}
      </ul>
    </Nav>
  )
}

export default Navigation
