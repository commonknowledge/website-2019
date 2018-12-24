import React from 'react'
import { Heading, Box, Text, Flex } from '../utils/rebass'
import DefaultLayout from '../components/defaultLayout'
import Wrapper from '../components/wrapper'

const ErrorPage: React.SFC = () => (
  <DefaultLayout>
    <Flex
      width={1}
      css={{ minHeight: '100vh', flex: 1 }}
      flexDirection="column"
      alignItems="center"
    >
      <Box width={1}>
        <Wrapper>
          <Heading py={[3, 4, 5]} fontSize={[4, 4, 6]}>
            Page not found
          </Heading>
        </Wrapper>
      </Box>
      <Box width={1} py={4} color="grey" bg="black" css={{ flex: 1 }}>
        <Flex height={1} alignItems="center" flexDirection="column">
          <Wrapper>
            <Text fontSize={[2, 3, 4]}>
              <p>
                Your “order” is built on sand. Tomorrow the revolution will
                “rise up again, clashing its weapons,” and to your horror it
                will proclaim with trumpets blazing:
              </p>
              <p>I was, I am, I shall be!</p>
            </Text>
            <Heading fontSize={2}>– Rosa Luxembourg</Heading>
          </Wrapper>
        </Flex>
      </Box>
    </Flex>
  </DefaultLayout>
)

export default ErrorPage
