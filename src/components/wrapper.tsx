import * as React from 'react'

const Wrapper: React.SFC = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0 1.0875rem',
    }}
  >
    {children}
  </div>
)

export default Wrapper
