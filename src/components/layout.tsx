import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

const Layout: React.SFC = ({ children }) => (
  <>
    <Helmet
      title="Common Knowledge"
      meta={[
        {
          name: 'description',
          content:
            'Common Knowledge is a tech cooperative building tools and infrastructure to encourage grassroots political organising on the left.',
        },
        {
          name: 'keywords',
          content:
            'politics, grassroots, socialism, left, technology, activism, organising',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <div
        style={{
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  </>
)

export default Layout
