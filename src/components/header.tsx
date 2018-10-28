import React from 'react'
import { Heading, Flex, Box } from 'rebass'
import { InternalLink } from './link'

const Header: React.SFC = () => (
  <Box pt={[3, 4]} pb={[3, 4]}>
    <Flex>
      <Heading fontSize={3}>
        <InternalLink
          to="/"
          style={{ 'text-transform': 'uppercase', color: 'black' }}
        >
          Common Knowledge
        </InternalLink>
      </Heading>
    </Flex>
  </Box>
)

export default Header
