import * as React from 'react'
import { Container } from 'rebass'

const Wrapper: React.SFC = ({ children }) => (
  <Container maxWidth={960}>{children}</Container>
)

export default Wrapper
