import * as React from 'react'
import Card from './Card'
// @ts-ignore
import logo from '../../images/movement-logo.svg'
import * as css from './styles'

const Section: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = props => (
  <div
    {...props}
    style={{
      ...(props.style || {}),
      ...css.padded,
      ...css.section,
      backgroundColor: 'white',
      color: 'black',
    }}
  />
)

const InstructionsCard: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    event: string
    address: string
    time: string
    emergencyContact?: string
    instructions?: string[]
  }
> = ({ event, address, time, emergencyContact, instructions, ...props }) => {
  return (
    <Card {...props}>
      {/* <div style={{ padding: '20px 20px', textAlign: 'center' }}>
        <img src={logo} style={{ width: '20%', margin: 0 }} />
      </div> */}
      <div style={{ ...css.padded, paddingBottom: 20 }}>
        <div style={{ ...css.subtitle }}>I'm here for</div>
        <div style={{ ...css.bold }}>{event}</div>
      </div>
      <Section>
        <div style={{ ...css.subtitle }}>When?</div>
        <div style={{ fontSize: 35, ...css.bold }}>{time}</div>
      </Section>
      <Section>
        <div style={{ ...css.subtitle }}>Where?</div>
        <a
          href={`https://www.google.co.uk/maps?q=${encodeURIComponent(
            address
          )}`}
          style={{
            lineHeight: '1em',
            fontSize: 32,
            textDecoration: 'none',
            ...css.bold,
          }}
        >
          {address}
        </a>
        <div style={{ fontSize: 12, fontStyle: 'italic' }}>
          Click for Google Maps
        </div>
      </Section>
      {instructions && (
        <Section>
          <div style={{ ...css.subtitle }}>When you get there...</div>
          <ol style={{ fontSize: 36, ...css.padded, textAlign: 'left' }}>
            {instructions.map((step, i) => (
              <>
                <li key={i} style={{ ...css.bold }}>
                  {step}
                </li>
              </>
            ))}
          </ol>
        </Section>
      )}
      {emergencyContact && (
        <Section>
          <div style={{ ...css.subtitle }}>Any problems?</div>
          <div style={{ fontSize: 24, ...css.bold }}>{emergencyContact}</div>
        </Section>
      )}
    </Card>
  )
}

export default InstructionsCard
