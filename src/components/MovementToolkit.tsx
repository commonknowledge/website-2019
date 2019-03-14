import * as React from 'react'
import { useTrail, animated } from 'react-spring'
import TicketCard from '../components/going/TicketCard'
import InstructionsCard from '../components/going/InstructionCard'
import ReferralCard from '../components/going/ReferralCard'
import styled from 'styled-components'
import {
  airtableURL,
  airtableFetchArgs,
  useAirtableData,
} from '../helpers/airtable'
import * as css from '../components/going/styles'

const Caption = styled.div({
  textAlign: 'center',
  margin: '0 auto',
  fontSize: 14,
  color: '#AFAFAF',
  lineHeight: '1em',
  ...css.padded,
})

const MovementToolkit: React.SFC<{ uid: string; cid: string }> = ({
  uid,
  cid,
}) => {
  let { data, isLoading, isError } = useAirtableData<{
    name: string
    event: string
    time: string
    address: string
    emergencyContact: string
    code: string
    instructions: any
  }>(
    airtableURL('/Commitments', {
      filterByFormula: `AND({cid} = "${cid}", {uid} = "${uid}")`,
    }),
    airtableFetchArgs()
  )

  const isInvalid = !isLoading && (!cid || !uid || isError)

  let {
    name = '',
    event = '',
    time = '',
    address = '',
    emergencyContact = '',
    instructions = '',
  } = data && data[0] ? data[0] : {}

  try {
    instructions = JSON.parse(instructions)
  } catch (e) {
    instructions = []
  }

  let cards: JSX.Element[] = []

  if (name) {
    cards.push(
      <>
        <Caption style={{ marginTop: 20 }}>
          Show this to the event organiser, when you arrive
        </Caption>
        <TicketCard name={name} style={{ marginTop: 8 }} />
      </>
    )
  }

  if (event && time && address) {
    cards.push(
      <>
        <Caption>Quick reference for you</Caption>
        <InstructionsCard
          style={{ marginTop: 8 }}
          event={event}
          time={time}
          address={JSON.parse(address)}
          instructions={instructions}
          emergencyContact={emergencyContact}
        />
      </>
    )
  }

  if (uid) {
    cards.push(
      <>
        <Caption>Someone asking about Movement?</Caption>
        <ReferralCard code={uid} style={{ marginTop: 8 }} />
      </>
    )
  }

  const trail = useTrail(cards.length, {
    config: { mass: 10, tension: 2000, friction: 170 },
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
  })

  return isInvalid || !data.length || isLoading ? (
    <div
      style={{
        textAlign: 'center',
        color: '#CCC',
        fontSize: 32,
      }}
    >
      {isLoading || !data.length ? (
        <span>Loading</span>
      ) : (
        <>
          This Movement toolkit has expired.
          <br />
          <a href="https://wa.me/447496564066">
            Message Movement for a new one.
          </a>
        </>
      )}
    </div>
  ) : (
    <>
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
    </>
  )
}

export default MovementToolkit
