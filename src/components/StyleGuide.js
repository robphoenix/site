import React from 'react'
import { Flex, Box, Text, Heading } from '@theme-ui/components'

import Typography from './Typography'
import Colours from './Colours'
import Spacing from './Spacing'
import { Stack } from './Stack'

const SectionHeading = (props) => (
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

const Section = (props) => (
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
          sx={{ px: [3, 3, 4], width: `100vw`, flexDirection: `column` }}
        >
          <Stack space={3} sx={{ px: [3, 3, 4] }}>
            <Text sx={{ fontSize: [2, 3, 4] }}>
              “Perfection is achieved, not when there is nothing more to add,
              but when there is nothing left to take away.”
            </Text>
            <Text sx={{ fontSize: [2, 3, 3], alignSelf: `flex-end` }}>
              ― Antoine de Saint-Exupéry
            </Text>
          </Stack>
          <Stack space={3}>
            <Text sx={{ fontSize: [2, 3, 3], lineHeight: `copy` }}>
              I went to art school in the 1990's, then, after becoming a dad in
              the 2010's, I went back to uni to study network engineering and
              ended up writing code; automating networks and then building
              backend systems. In recent years I've moved closer to the user,
              building web UI's, and discovering a passion for Design Systems,
              UX, typography, animation, microinteractions and both CSS &
              CSS-in-JS. I live in rural North Wales with my partner, our kids,
              2 dogs, 1 cat, 4 chickens, 2 ponies & 1 sheep. I don't code on the
              weekends.
            </Text>
            <Text sx={{ fontSize: [2, 3, 3], lineHeight: `copy` }}>
              It's worth noting that I'm a straight, white, middle-class,
              able-bodied, cisgender male. Everything I've achieved, no matter
              how hard I've worked, has been enabled by all the privilege this
              brings.
            </Text>
          </Stack>
        </Stack>
      </Section>
    </Stack>
  )
}

export default StyleGuide
