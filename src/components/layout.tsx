import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'
import { absoluteURL } from '../utils/meta'
import { graphql, StaticQuery } from 'gatsby'
import sharecard from '../images/sharecard.png'

const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.colors.background};
  }
`

const Layout: React.SFC<any> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              siteURL
              description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title, description, siteURL },
        },
      }) => (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              {
                name: 'keywords',
                content:
                  'politics, grassroots, socialism, left, technology, activism, organising',
              },
              { name: 'twitter:description', content: description },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@coopknowledge' },
              { name: 'twitter:creator', content: '@coopknowledge' },
              { property: 'og:title', content: title },
              { property: 'og:description', content: description },
              {
                property: 'og:image',
                content: absoluteURL(siteURL, sharecard),
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
      )}
    />
  )
}

export default Layout
