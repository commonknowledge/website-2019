import * as React from 'react'
import Container from './container'

const Wrapper: React.SFC<any> = ({ children, ...props }) => (
  <Container {...props} maxWidth={960} px={[2, 3, 4]}>
    {children}
  </Container>
)

export default Wrapper
