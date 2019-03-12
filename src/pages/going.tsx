import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import queryString from 'query-string'
// @ts-ignore
import logo from '../images/movement-logo.svg'

const StyledContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Patrick+Hand');

  html {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  .sans-serif {
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
      'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
      sans-serif;
  }

  .handwritten {
    font-family: 'patrick hand', -apple-system, BlinkMacSystemFont,
      'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto,
      'segoe ui', arial, sans-serif;
  }
`

const brandColor = '#FF4419'
const title = "I'm from Movement"

const padded = { paddingLeft: 20, paddingRight: 20 }
const bold = { fontWeight: 900 }
const subtitle = { fontSize: 20, fontWeight: 700 }
const section = {
  lineHeight: '1em',
  paddingTop: 15,
  paddingBottom: 15,
  borderStyle: 'solid',
  borderColor: '#d2d2d2',
  borderWidth: 0.5,
  borderLeft: 0,
  borderRight: 0,
}

const Typeform: React.SFC = () => {
  const { name, event, time, address, instructions } = queryString.parse(
    typeof window !== 'undefined' ? window.location.search : 'randomstring'
  )

  return (
    <StyledContainer>
      <Helmet>
        <title>{title}</title>
        <meta name="theme-color" content="#db5945" />
        <html lang="en-GB" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div
          className="sans-serif"
          style={{
            fontSize: 36,
            lineHeight: '1em',
            maxWidth: 380,
            margin: '18px auto',
            background: brandColor,
            color: 'white',
            borderRadius: 10,
            textAlign: 'center',
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.25)',
            padding: '20px 0',
          }}
        >
          <div style={{ padding: '20px 20px', textAlign: 'center' }}>
            <img src={logo} style={{ width: '20%', margin: 0 }} />
          </div>
          <div style={{ ...bold, ...padded }}>
            I’m from Movement
            <br /> and my name’s
          </div>
          <div
            style={{
              margin: '16px 0 0',
              padding: '55px 20px 80px',
              lineHeight: '0.2em',
              fontSize: 100,
              background: 'white',
              color: 'black',
              fontWeight: 900,
            }}
            className="handwritten"
          >
            {name}
          </div>
          <div style={{ ...padded, paddingTop: 40, paddingBottom: 20 }}>
            <div style={{ marginBottom: 50 }}>...</div>
            <div style={{ ...subtitle }}>I'm here for</div>
            <div style={{ ...bold }}>{event}</div>
          </div>
          <div
            style={{
              ...padded,
              ...section,
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            <div style={{ ...subtitle }}>When?</div>
            <div style={{ fontSize: 35, ...bold }}>{time}</div>
          </div>
          <div
            style={{
              ...padded,
              ...section,
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            <div style={{ ...subtitle }}>Where?</div>
            <a
              href={`https://www.google.co.uk/maps?q=${address}`}
              style={{
                lineHeight: '1em',
                fontSize: 30,
                textDecoration: 'none',
                ...bold,
              }}
            >
              {address}
            </a>
            <div style={{ fontSize: 12, fontStyle: 'italic' }}>
              Click for Google Maps
            </div>
          </div>
          <div
            style={{
              ...padded,
              ...section,
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            <div style={{ ...subtitle }}>Where you get there...</div>
            <ol style={{ fontSize: 35, ...padded, textAlign: 'left' }}>
              {JSON.parse(instructions).map(step => (
                <>
                  <li style={{ ...bold }}>{step}</li>
                </>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </StyledContainer>
  )
}

export default Typeform
