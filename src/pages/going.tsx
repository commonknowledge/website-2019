import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import { useTrail, animated } from 'react-spring'
import TicketCard from '../components/going/TicketCard'
import InstructionsCard from '../components/going/InstructionCard'
import * as css from '../components/going/styles'
import ReferralCard from '../components/going/ReferralCard'

const StyledContainer = styled.div`
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
    name = undefined,
    event = undefined,
    time = undefined,
    address = undefined,
    emergencyContact = undefined,
    code = undefined,
    instructions = [],
  } = queryString.parse(
    typeof window !== 'undefined' ? window.location.search : 'randomstring'
  )

  try {
    instructions = JSON.parse(instructions)
  } catch (e) {
    instructions = []
  }

  let cards: JSX.Element[] = []

  cards.push(
    <>
      <Caption style={{ marginTop: 20 }}>
        Show this to the event organiser, when you arrive
      </Caption>
      <TicketCard name={name} style={{ marginTop: 8 }} />
    </>
  )

  if (event && time && address) {
    cards.push(
      <>
        <Caption>Quick reference for you</Caption>
        <InstructionsCard
          style={{ marginTop: 8 }}
          event={event}
          time={time}
          address={address}
          instructions={instructions}
          emergencyContact={emergencyContact}
        />
      </>
    )
  }

  if (code) {
    cards.push(
      <>
        <Caption>Someone asking about Movement?</Caption>
        <ReferralCard code={code} style={{ marginTop: 8 }} />
      </>
    )
  }

  const trail = useTrail(cards.length, {
    config: { mass: 10, tension: 2000, friction: 170 },
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
  })

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
        {(trail as any[]).map(({ opacity, x }, i) => (
          <animated.div
            key={i}
            style={{
              opacity,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            {cards[i]}
          </animated.div>
        ))}
      </div>
    </StyledContainer>
  )
}

export default Typeform
