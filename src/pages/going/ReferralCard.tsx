import * as React from 'react'
import Card from './Card'
import QRCode from 'qrcode-svg'
import * as css from './styles'

const ReferralCard: React.SFC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { code: string }
> = ({ code, ...props }) => {
  return (
    <Card {...props}>
      <div style={{ ...css.bold, fontSize: 32, marginTop: 12 }}>
        Invite your friends
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: new QRCode({
            ecl: 'L',
            content: `https://commonknowledge.coop/movement?code=${code}`,
            background: 'transparent',
            color: 'white',
          }).svg(),
        }}
      />
    </Card>
  )
}

export default ReferralCard
