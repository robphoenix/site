/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Flex } from '@theme-ui/components'

import Typography from './Typography'
import ColourContrast from './ColourContrast'
import Colours from './Colours'
import TypeScale from './TypeScale'
import Spacing from './Spacing'
import FontWeights from './FontWeights'
import LetterSpacings from './LetterSpacings'
import Social from './Social'

const SectionHeading = props => (
  <h4
    sx={{
      fontFamily: 'heading',
      fontSize: [1, 2, 5],
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      color: 'text',
      lineHeight: 'solid',
      marginBottom: 5,
    }}
    {...props}
  />
)

const Section = props => (
  <Flex
    as="section"
    sx={{
      flexDirection: `column`,
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
    <div sx={{ marginTop: 7, width: `100%`, maxWidth: 900 }}>
      <div sx={{ marginBottom: 7, px: 4 }}>
        <Box
          as="h2"
          sx={{
            fontFamily: `heading`,
            fontSize: 8,
            color: `text`,
            fontWeight: `heading`,
            lineHeight: `title`,
            textTransform: `uppercase`,
            letterSpacing: `tracked`,
            maxWidth: `10ch`,
            lineHeight: 1.5,
          }}
        >
          frontend. developer. designer.
        </Box>
      </div>
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
