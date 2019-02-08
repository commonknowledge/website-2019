import * as React from 'react'
import { Container } from 'rebass'

const Wrapper: React.SFC<any> = ({ children, ...props }) => (
  <Container {...props} maxWidth={960}>
    {children}
  </Container>
)

export default Wrapper