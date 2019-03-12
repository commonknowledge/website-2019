import * as React from 'react'
import * as css from './styles'

const brandColor = '#FF4419'

const Card: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = props => {
  return (
    <div
      {...props}
      style={{
        ...css.sansSerif,
        maxWidth: 380,
        margin: '18px auto',
        borderRadius: 10,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.25)',
        fontSize: 36,
        lineHeight: '1em',
        background: brandColor,
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        ...(props.style || {}),
      }}
    />
  )
}

export default Card
