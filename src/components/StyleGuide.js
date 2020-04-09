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
      width: 350,
      fontFamily: 'heading',
      fontSize: [1, 2, 4],
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
  <section
    sx={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      paddingY: 5,
      borderTop: `1px solid`,
      borderColor: 'text',
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
        <Section>
          <SectionHeading>Colour Palette</SectionHeading>
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
          <SectionHeading>letter spacings</SectionHeading>
          <LetterSpacings />
        </Section>

        <Section>
          <SectionHeading>Spacing</SectionHeading>
          <Spacing />
        </Section>
      </div>
    </div>
  )
}

export default StyleGuide
