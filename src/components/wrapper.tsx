import * as React from 'react'
import Container from './container'

const Wrapper: React.SFC<any> = ({ children, ...props }) => (
  <Container {...props} maxWidth={1360} px={[4, 5, 6]}>
    {children}
  </Container>
)

export default Wrapper
