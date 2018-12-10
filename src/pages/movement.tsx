import * as React from 'react'
import styled from 'styled-components'

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

const Typeform: React.SFC = () => (
  <StyledContainer>
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
