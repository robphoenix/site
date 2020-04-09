/** @jsx jsx */
import { jsx } from 'theme-ui'

import Typography from './Typography'
import ColourContrast from './ColourContrast'
import Colours from './Colours'
import TypeScale from './TypeScale'
import Spacing from './Spacing'
import FontWeights from './FontWeights'
import LetterSpacings from './LetterSpacings'
import Social from './Social'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const SectionHeading = props => (
  <h4
    sx={{
      fontFamily: 'heading',
      fontSize: [1, 2, 4],
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'tracked',
      color: 'text',
      lineHeight: 'solid',
      marginBottom: 5,
      borderTop: `1px solid`,
      borderColor: 'text',
      width: '100%',
      paddingTop: 5,
    }}
    {...props}
  />
)

const Section = props => (
  <section
    sx={{
      marginBottom: [4, 4, 5],
    }}
    {...props}
  />
)

const StyleGuide = () => {
  const { description } = useSiteMetadata()
  return (
    <div sx={{ marginTop: 6 }}>
      <div sx={{ marginBottom: 7 }}>
        <h2
          sx={{
            fontFamily: 'heading',
            fontSize: 6,
            color: 'text',
            fontWeight: 'heading',
            lineHeight: 'title',
            textTransform: 'uppercase',
            letterSpacing: 'tracked',
            marginBottom: 4,
          }}
        >
          {description}
        </h2>
        <Social />
      </div>
      <div>
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
    </div>
  )
}

export default StyleGuide
