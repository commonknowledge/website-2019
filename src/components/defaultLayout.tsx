import * as React from 'react'
import Layout from './layout'
import Header from './header'
import { Box } from 'rebass'

const DefaultLayout: React.SFC = ({ children }) => (
  <Layout>
    <Header />
    {children}
  </Layout>
)

export default DefaultLayout
