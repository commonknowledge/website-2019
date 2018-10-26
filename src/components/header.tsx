import React from 'react'
import { Heading, Flex, Box } from 'rebass'
import Link from './link'

const Header: React.SFC = () => (
  <Box pt={[3, 4]} pb={[3, 4]}>
    <Flex>
      <Heading fontSize={3}>
        <Link to="/" style={{ 'text-transform': 'uppercase', color: 'black' }}>
          Common Knowledge
        </Link>
      </Heading>
    </Flex>
  </Box>
)

export default Header
