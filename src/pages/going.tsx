import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import * as css from '../components/going/styles'
import MovementToolkit from '../components/MovementToolkit'

const StyledContainer = styled.div`
  html {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
`

const title = "I'm from Movement"

const GoingPage: React.SFC = () => {
  let { cid = undefined, uid = undefined } = queryString.parse(
    typeof window !== 'undefined' ? window.location.search : 'randomstring'
  )

  return (
    <StyledContainer>
      <Helmet>
        <title>{title}</title>
        <meta name="theme-color" content="#db5945" />
        <html lang="en-GB" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'center',
          ...css.sansSerif,
        }}
      >
        <React.Suspense fallback={<span />}>
          <MovementToolkit cid={cid} uid={uid} />
        </React.Suspense>
      </div>
    </StyledContainer>
  )
}

export default GoingPage
