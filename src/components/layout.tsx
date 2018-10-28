import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.colors.background};
  }
`

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
      <>
        <GlobalStyle />
        <div>{children}</div>
      </>
    </ThemeProvider>
  </>
)

export default Layout
