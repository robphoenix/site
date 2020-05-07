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
import ThemeSwitcher from './ThemeSwitcher'

const SectionHeading = props => (
  <Heading
    as="h4"
    sx={{
      // fontFamily: 'heading',
      fontSize: [2, 3, 4],
      // fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      color: `primary`,
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
      px: [0, 4],
      borderTop: `1px solid`,
      borderColor: 'text',
    }}
    {...props}
  />
)

const StyleGuide = () => {
  return (
    <Box sx={{ width: `100%` }}>
      <Section>
        <SectionHeading>colour</SectionHeading>
        <Colours />
      </Section>

      <Section>
        <SectionHeading>typography</SectionHeading>
        <Typography />
        <TypeScale />
      </Section>

      <Section>
        <SectionHeading>space</SectionHeading>
        <Spacing />
      </Section>
    </Box>
  )
}

export default StyleGuide
