import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import TicketCard from './going/TicketCard'
import InstructionsCard from './going/InstructionCard'
import * as css from './going/styles'

const StyledContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Patrick+Hand');

  html {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
`

const title = "I'm from Movement"

const Caption = styled.div({
  textAlign: 'center',
  margin: '0 auto',
  fontSize: 14,
  color: '#AFAFAF',
  lineHeight: '1em',
  ...css.padded,
})

const Typeform: React.SFC = () => {
  let {
    name = '',
    event = '',
    time = '',
    address = '',
    emergencyContact = '',
    instructions = [],
  } = queryString.parse(
    typeof window !== 'undefined' ? window.location.search : 'randomstring'
  )

  try {
    instructions = JSON.parse(instructions)
  } catch (e) {
    instructions = []
  }

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          ...css.sansSerif,
        }}
      >
        <Caption style={{ marginTop: 20 }}>
          Show this to the event organiser, when you arrive
        </Caption>
        <TicketCard name={name} style={{ marginTop: 8 }} />
        <Caption>Quick reference for you</Caption>
        <InstructionsCard
          style={{ marginTop: 8 }}
          event={event}
          time={time}
          address={address}
          instructions={instructions}
          emergencyContact={emergencyContact}
        />
      </div>
    </StyledContainer>
  )
}

export default Typeform
