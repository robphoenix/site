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
    <Nav
      as="nav"
      role="navigation"
      sx={{
        gridColumn: '3/3',
        gridRow: '1/3',
        display: ['none', 'flex'],
        justifyContent: 'flex-end',
        alignSelf: 'center',
        justifySelf: 'center',
      }}
    >
      <ul
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
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
