import * as React from 'react'
import Card from './Card'
import { Textfit } from 'react-textfit'
// @ts-ignore
import logo from '../../images/movement-logo.svg'
import * as css from './styles'

const TicketCard: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { name: string }
> = ({ name, ...props }) => {
  return (
    <Card {...props}>
      <div style={{ padding: '20px 20px', textAlign: 'center' }}>
        <img src={logo} style={{ width: '20%', margin: 0 }} />
      </div>
      <div style={{ ...css.bold, ...css.padded }}>
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
          ...css.handwritten,
        }}
      >
        <Textfit mode="single" max={140}>
          {name}
        </Textfit>
      </div>
    </Card>
  )
}

export default TicketCard
