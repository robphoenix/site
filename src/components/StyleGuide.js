import React from 'react'
import { Flex, Box, Text, Heading } from '@theme-ui/components'

import Typography from './Typography'
import Colours from './Colours'
import Spacing from './Spacing'
import { Stack } from './Stack'

const SectionHeading = props => (
  <Heading
    as="h4"
    sx={{
      width: `100%`,
      fontFamily: 'heading',
      fontSize: [4, 4, 5],
      textTransform: `capitalize`,
      color: `primary`,
      lineHeight: 'solid',
      borderBottom: `3px solid`,
      borderColor: `primary`,
      pb: [3, 3, 4],
      textAlign: `left`,
    }}
    {...props}
  />
)

const Section = props => (
  <Stack
    space={[4, 4, 5]}
    as="section"
    sx={{
      justifyContent: `center`,
      alignItems: `start`,
      // width: '100%',
    }}
    {...props}
  />
)

const StyleGuide = () => {
  return (
    <Stack space={[5, 5, 6]} sx={{ width: `100%` }}>
      <Section>
        <SectionHeading>colour</SectionHeading>
        <Box sx={{ px: [2, 2, 0], width: `100%` }}>
          <Colours />
        </Box>
      </Section>

      <Section>
        <SectionHeading>typography</SectionHeading>
        <Box
          sx={{
            px: [2, 2, 0],
            width: `100%`,
          }}
        >
          <Typography />
        </Box>
      </Section>

      <Section>
        <SectionHeading>space</SectionHeading>
        <Box
          sx={{
            px: [2, 2, 0],
            width: `100%`,
            pb: 4,
            overflowX: `auto`,
          }}
        >
          <Spacing />
        </Box>
      </Section>
      <Section>
        <SectionHeading>foundations</SectionHeading>
        <Stack
          space={5}
          sx={{ px: [2, 2, 0], width: `100%`, flexDirection: `column`, px: 4 }}
        >
          <Stack space={3} sx={{ px: 4 }}>
            <Text sx={{ fontSize: [2, 3, 4] }}>
              “Perfection is achieved, not when there is nothing more to add,
              but when there is nothing left to take away.”
            </Text>
            <Text sx={{ fontSize: [2, 3, 3], alignSelf: `flex-end` }}>
              ― Antoine de Saint-Exupéry
            </Text>
          </Stack>
          <Stack space={3}>
            <Text sx={{ fontSize: [2, 3, 3] }}>
              I went to art school in the 1990's, then, after becoming a dad in
              2010's, I went back to uni to study network engineering. I started
              coding, automating networks with Python, then building systems
              with Elixir & Go. In recent years I have moved closer to the user,
              building web applications with JavaScript & TypeScript and have
              found a passion for UX, Design Systems and, to my great surprise,
              CSS.
            </Text>
            <Text sx={{ fontSize: [2, 3, 3] }}>
              It's worth noting that I'm a straight, white, middle-class,
              able-bodied, man. Everything I've done, no matter how hard I've
              worked, has been enabled by my privilege.
            </Text>
          </Stack>
        </Stack>
      </Section>
    </Stack>
  )
}

export default StyleGuide
