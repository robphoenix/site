import React from 'react'
import { Box, Text, Heading } from '@theme-ui/components'

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
      fontSize: [3, 4, 5],
      // textTransform: 'uppercase',
      // letterSpacing: 'tracked',
      textTransform: `capitalize`,
      color: `primary`,
      lineHeight: 'solid',
      borderBottom: `3px solid`,
      borderColor: `primary`,
      pb: 3,
      textAlign: `left`,
    }}
    {...props}
  />
)

const Section = props => (
  <Stack
    space={5}
    as="section"
    sx={{
      justifyContent: `center`,
      alignItems: `start`,
      width: '100%',
      // py: 4,
      // px: [0, 4],
      // borderTop: `1px solid`,
      // borderColor: 'text',
    }}
    {...props}
  />
)

const StyleGuide = () => {
  return (
    <Stack space={6} sx={{ width: `100%` }}>
      <Section>
        <SectionHeading>colour</SectionHeading>
        <Box sx={{ px: [0, 0, 4], width: `100%` }}>
          <Colours />
        </Box>
      </Section>

      <Section>
        <SectionHeading>typography</SectionHeading>
        <Box sx={{ px: [0, 0, 4], width: `100%` }}>
          <Typography />
        </Box>
      </Section>

      <Section>
        <SectionHeading>space</SectionHeading>
        <Box sx={{ px: [0, 0, 4], width: `100%` }}>
          <Spacing />
        </Box>
      </Section>
      <Section>
        <SectionHeading>foundations</SectionHeading>
        <Box sx={{ px: [0, 0, 4], width: `100%` }}>
          <Text
            sx={{
              fontFamily: `body`,
              fontSize: [2, 3, 4],
            }}
          >
            Laboris ex ea elit duis incididunt sunt quis occaecat id. Fugiat
            tempor cillum anim veniam qui fugiat culpa elit culpa laboris elit
            aliquip enim irure. Eiusmod laboris duis in amet exercitation cillum
            duis laborum anim eu irure consectetur proident qui.
          </Text>
        </Box>
      </Section>
    </Stack>
  )
}

export default StyleGuide
