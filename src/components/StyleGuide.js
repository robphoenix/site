/** @jsx jsx */
import { jsx } from 'theme-ui'

import Typography from './Typography'
import ColourContrast from './ColourContrast'
import Colours from './Colours'
import TypeScale from './TypeScale'
import Spacing from './Spacing'

const SectionHeading = props => (
  <h3
    sx={{
      gridColumn: '1/1',
      fontFamily: 'heading',
      fontSize: [1, 2, 3],
      color: 'text',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
    }}
    {...props}
  />
)

const Section = props => (
  <section
    sx={{
      gridColumn: '2/-1',
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
        columnGap: [3, 4, 5],
      }}
    >
      <h2
        sx={{
          gridColumn: '1/-1',
          fontFamily: 'heading',
          fontSize: [2, 3, 4],
          color: 'text',
          textTransform: 'uppercase',
          letterSpacing: 'tracked',
          borderBottom: 1,
          borderColor: 'primary',
          marginBottom: 4,
          paddingBottom: 2,
        }}
      >
        design tokens
      </h2>

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

      <SectionHeading>Spacing</SectionHeading>
      <Section>
        <Spacing />
      </Section>
    </div>
  )
}

export default StyleGuide
