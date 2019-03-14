import * as React from 'react'
import {
  StripeProvider,
  Elements,
  PaymentRequestButtonElement,
  injectStripe,
} from 'react-stripe-elements'

const Form: React.SFC<{ value: number }> = injectStripe(({ stripe, value }) => {
  const [paymentRequest, setPaymentRequest] = React.useState()
  const [canMakePayments, setCanMakePayments] = React.useState<boolean | null>(
    null
  )

  React.useEffect(
    () => {
      const paymentRequest = stripe.paymentRequest({
        country: 'GB',
        currency: 'gbp',
        total: {
          label: 'Donation',
          amount: value,
        },
      })

      paymentRequest.on('token', ({ complete, token, ...data }) => {
        console.log('Received Stripe token: ', token)
        console.log('Received customer information: ', data)
        complete('success')
      })

      paymentRequest.canMakePayment().then(result => {
        setCanMakePayments(!!result)
      })

      setPaymentRequest(paymentRequest)
    },
    [value]
  )

  return canMakePayments ? (
    <PaymentRequestButtonElement
      paymentRequest={paymentRequest}
      className="PaymentRequestButton"
      style={{
        // For more details on how to style the Payment Request Button, see:
        // https://stripe.com/docs/elements/payment-request-button#styling-the-element
        paymentRequestButton: {
          theme: 'light',
          height: '64px',
        },
      }}
    />
  ) : null
})

export default ({ value }: { value: number }) => (
  <StripeProvider apiKey="pk_live_DW2YXXNVefpIj5AJ7o0yrYJl">
    <Elements>
      <Form value={value} />
    </Elements>
  </StripeProvider>
)
