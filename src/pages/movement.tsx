import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const StyledContainer = styled.div`
  html {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  iframe {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border: 0;
    margin-bottom: 0;
  }
`

const title = 'Say hello to Movement'
const description = 'Politics is doing things, together.'

const Typeform: React.SFC = () => (
  <StyledContainer>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'politics, grassroots, socialism, left, technology, activism, organising',
        },
        { name: 'twitter:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@coopknowledge' },
        { name: 'twitter:creator', content: '@coopknowledge' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        {
          property: 'og:image',
          content:
            'https://raw.githubusercontent.com/commonknowledge/website/master/src/images/movement-app-thumbnail.jpg',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      src="https://movementapp.typeform.com/to/NZGPd4"
    />
  </StyledContainer>
)

export default Typeform
