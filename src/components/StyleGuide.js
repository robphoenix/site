/** @jsx jsx */
import { jsx } from 'theme-ui'

import Typography from './Typography'
import ColourContrast from './ColourContrast'
import Colours from './Colours'
import TypeScale from './TypeScale'
import Spacing from './Spacing'
import FontWeights from './FontWeights'
import LetterSpacings from './LetterSpacings'

const SectionHeading = props => (
  <h4
    sx={{
      gridColumn: '1/3',
      fontFamily: 'heading',
      fontSize: [1, 2],
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      color: 'text',
      lineHeight: 'solid',
    }}
    {...props}
  />
)

const Section = props => (
  <section
    sx={{
      gridColumn: ['4/-1', '3/-1'],
      marginBottom: [4, 4, 5],
    }}
    {...props}
  />
)

const StyleGuide = () => {
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        columnGap: [2, 4, 5],
      }}
    >
      <h3
        sx={{
          gridColumn: '1/-1',
          fontFamily: 'heading',
          fontSize: 3,
          fontWeight: 'heading',
          lineHeight: 'title',
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          marginBottom: 4,
        }}
      >
        design tokens
      </h3>
      <SectionHeading>Colour Palette</SectionHeading>
      <Section>
        <Colours />
      </Section>

      <SectionHeading>Colour Contrast</SectionHeading>
      <Section>
        <ColourContrast />
      </Section>

      <SectionHeading>Typography</SectionHeading>
      <Section>
        <Typography />
      </Section>

      <SectionHeading>Type Scale</SectionHeading>
      <Section>
        <TypeScale />
      </Section>

      <SectionHeading>Font Weights</SectionHeading>
      <Section>
        <FontWeights />
      </Section>

      <SectionHeading>letter spacings</SectionHeading>
      <Section>
        <LetterSpacings />
      </Section>

      <SectionHeading>Spacing</SectionHeading>
      <Section>
        <Spacing />
      </Section>
    </div>
  )
}

export default StyleGuide
