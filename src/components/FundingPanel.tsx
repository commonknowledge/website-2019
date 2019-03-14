import * as React from 'react'
import { Text, Heading, Box, Flex } from '../utils/rebass'

export default () => (
  <>
    <div>
      <Heading fontSize={[5, 5, 5]} css={{ color: 'white' }}>
        Help sustain this
      </Heading>
      <Text fontSize={0} css={{ color: 'white', marginTop: 10 }}>
        We rely on donations and grants to keep going. We use the money to
        conduct user research, collaborate with campaigning activists, bring
        together existing digital solutions and build new tools.
      </Text>
      <Text fontSize={0} css={{ color: 'white', marginTop: 10 }}>
        Our overarching goal is to accelerate the growth of the grassroots left,
        and minimise the barriers that people face to building power for
        themselves.
      </Text>
      <Text fontSize={0} css={{ color: 'white', marginTop: 10 }}>
        Your donation fuels all of this.
      </Text>
    </div>
    <Flex
      mt={[3, 3, 4]}
      flexDirection={['column', 'row']}
      justifyContent={'space-around'}
    >
      <Box my={[3, 3, 4]}>
        <Text textAlign="center">
          <a
            style={{
              display: 'inline-block',
              fontSize: 32,
              borderRadius: 100,
              background: 'white',
              color: 'black',
              padding: '10px 20px',
              fontWeight: 900,
              textDecoration: 'none',
            }}
            href="https://opencollective.com/commonknowledge/donate"
            target="_blank"
          >
            <span>Donate</span>
          </a>
        </Text>
      </Box>

      <Box my={[3, 3, 4]}>
        <Text textAlign="center">
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
            target="_blank"
          >
            <span>Donate Crypto</span>
          </a>
          <Text mt={2} css={{ color: 'white', opacity: 0.4 }}>
            (Bitcoin etc.)
          </Text>
        </Text>
      </Box>
    </Flex>
  </>
)
