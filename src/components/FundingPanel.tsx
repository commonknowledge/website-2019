import * as React from 'react'

const description =
  "Help us out. We're a workers coop designing platform-level tools to support grassroots activists and grow the left, and we rely on donations and grants to keep going. We'll use the money to collaborate with campaigning activists to multiply their effect, and minimise the barriers to everyday activism for everyone."

export default () => (
  <>
    <div>
      <div style={{ fontSize: 32, fontWeight: 900 }}>Help sustain us</div>
      <div>{description}</div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-around',
      }}
    >
      {/* <div style={{ textAlign: 'center' }}>
              <a
                style={{
                  display: 'inline-block',
                  fontSize: 32,
                  borderRadius: 100,
                  background: '#00D87EFF',
                  color: 'white',
                  padding: '10px 20px',
                  fontWeight: 900,
                  textDecoration: 'none',
                }}
                href="https://commerce.coinbase.com/checkout/bcda7a9f-01a8-4835-b586-13558aa2cb2d"
              >
                <span>Donate</span>
              </a>
              <div style={{ opacity: 0.4 }}>(in any currency)</div>
            </div> */}
      <div style={{ textAlign: 'center' }}>
        <a
          style={{
            display: 'inline-block',
            fontSize: 32,
            borderRadius: 100,
            background: 'black',
            color: 'white',
            padding: '10px 20px',
            fontWeight: 900,
            textDecoration: 'none',
          }}
          href="https://commerce.coinbase.com/checkout/bcda7a9f-01a8-4835-b586-13558aa2cb2d"
        >
          <span>Donate Crypto</span>
        </a>
        <div style={{ opacity: 0.4 }}>(Bitcoin etc.)</div>
      </div>
    </div>
  </>
)
