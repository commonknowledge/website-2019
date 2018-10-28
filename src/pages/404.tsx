import React from 'react'
import { Heading } from 'rebass'
import DefaultLayout from '../components/DefaultLayout'

const ErrorPage: React.SFC<{}> = () => (
  <DefaultLayout>
    <Heading>404</Heading>
    <div>
      <p>
        Your “order” is built on sand. Tomorrow the revolution will “rise up
        again, clashing its weapons,” and to your horror it will proclaim with
        trumpets blazing:
      </p>
      <p>I was, I am, I shall be!</p>
    </div>
    <div>–Rosa Luxembourg</div>
  </DefaultLayout>
)

export default ErrorPage
