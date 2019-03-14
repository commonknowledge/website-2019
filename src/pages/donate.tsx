import * as React from 'react'
import Helmet from 'react-helmet'
import CurrencyInput from 'react-currency-input'
import StripeDonation from '../components/StripeDonation'
import Wrapper from '../components/wrapper'
import DefaultLayout from '../components/defaultLayout'
import FundingPanel from '../components/FundingPanel'

const title = 'Support Common Knowledge Co-operative with a donation'
const description =
  "Help us out. We're a workers coop designing platform-level tools to support grassroots activists and grow the left, and we rely on donations and grants to keep going. We'll use the money to collaborate with campaigning activists to multiply their effect, and minimise the barriers to everyday activism for everyone."

export default () => {
  const [amount, setAmount] = React.useState(10)

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />,
        <meta
          name="keywords"
          content={
            'politics, grassroots, socialism, left, technology, activism, organising'
          }
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content={'summary_large_image'} />
        <meta name="twitter:site" content={'@coopknowledge'} />
        <meta name="twitter:creator" content={'@coopknowledge'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={
            'https://raw.githubusercontent.com/commonknowledge/website/master/src/images/movement-app-thumbnail.jpg'
          }
        />
        <html lang="en-GB" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>
      <DefaultLayout>
        <Wrapper
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'middle',
          }}
        >
          <FundingPanel />
        </Wrapper>
      </DefaultLayout>
    </>
  )
}
