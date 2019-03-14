import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'
import { Box } from '../utils/rebass'

const GlobalStyle = createGlobalStyle`
  html {
    /* background: ${props => props.theme.colors.white}; */
  }
`

const Layout: React.SFC<any> = ({ children, ...props }) => (
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
        <Box {...props}>{children}</Box>
      </>
    </ThemeProvider>
  </>
)

export default Layout
