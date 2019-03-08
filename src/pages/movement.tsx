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
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />,
      <meta
        name="keywords"
        content={
          'politics, grassroots, socialism, left, technology, activism, organising'
        }
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content={'summary_large_image'} />
      <meta name="twitter:site" content={'@coopknowledge'} />
      <meta name="twitter:creator" content={'@coopknowledge'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          'https://raw.githubusercontent.com/commonknowledge/website/master/src/images/movement-app-thumbnail.jpg'
        }
      />
      <html lang="en-GB" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </Helmet>
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameBorder="0"
      src={`https://movementapp.typeform.com/to/NZGPd4${
        // Pass through the hidden values to the typeform
        typeof window !== 'undefined' ? window.location.search : ''
      }`}
    />
    <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
  </StyledContainer>
)

export default Typeform
