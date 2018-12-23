// React-based extension
import React from 'react'
import { Box } from 'rebass'
import { maxWidth } from 'styled-system'
import styled from 'styled-components'

const Container = styled(Box)`
  ${maxWidth};
`

export default (props: any) => <Container {...props} mx="auto" />
