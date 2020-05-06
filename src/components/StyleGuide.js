/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Flex, Heading } from '@theme-ui/components'

import Typography from './Typography'
import ColourContrast from './ColourContrast'
import Colours from './Colours'
import TypeScale from './TypeScale'
import Spacing from './Spacing'
import FontWeights from './FontWeights'
import LetterSpacings from './LetterSpacings'
import Social from './Social'
import { Stack } from './Stack'

const SectionHeading = props => (
  <Heading
    as="h4"
    sx={{
      // fontFamily: 'heading',
      fontSize: [1, 2, 4],
      // fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      // color: 'text',
      lineHeight: 'solid',
    }}
    {...props}
  />
)

const Section = props => (
  <Stack
    as="section"
    space={4}
    align="start"
    sx={{
      width: '100%',
      paddingY: 5,
      px: 4,
      borderTop: `1px solid`,
      borderColor: 'text',
    }}
    {...props}
  />
)

const StyleGuide = () => {
  return (
    <div sx={{ marginTop: 7, width: `100%` }}>
      <div>
        <Section>
          <SectionHeading>Colour</SectionHeading>
          <Colours />
        </Section>

        <Section>
          <SectionHeading>Colour Contrast</SectionHeading>
          <ColourContrast />
        </Section>

        <Section>
          <SectionHeading>Typography</SectionHeading>
          <Typography />
        </Section>

        <Section>
          <SectionHeading>Type Scale</SectionHeading>
          <TypeScale />
        </Section>

        <Section>
          <SectionHeading>Font Weights</SectionHeading>
          <FontWeights />
        </Section>

        <Section>
          <SectionHeading>letter spacing</SectionHeading>
          <LetterSpacings />
        </Section>

        <Section>
          <SectionHeading>Space</SectionHeading>
          <Spacing />
        </Section>
      </div>
      <Flex
        as="section"
        sx={{
          width: '100%',
          paddingY: 5,
          px: 4,
          borderTop: `1px solid`,
          borderColor: 'text',
          justifyContent: `center`,
        }}
      >
        <Social />
      </Flex>
    </div>
  )
}

export default StyleGuide
