// React-based extension
import React from 'react'
import { Box } from '../utils/rebass'
import { maxWidth } from '../utils/styled-system'
import styled from 'styled-components'

const Container = styled(Box)`
  ${maxWidth};
`

export default (props: any) => <Container {...props} mx="auto" />
