import React from 'react'
import { Heading, Flex, Box } from '../utils/rebass'
import { InternalLink } from './link'
import Wrapper from './wrapper'

const Header: React.SFC = () => (
  <Wrapper>
    <Box pt={[3, 4]} pb={[3, 4]}>
      <Flex>
        <Heading fontSize={3}>
          <InternalLink to="/" style={{ 'text-transform': 'uppercase' }}>
            Common Knowledge
          </InternalLink>
        </Heading>
      </Flex>
    </Box>
  </Wrapper>
)

export default Header
