import * as React from 'react'
import G, { Link as GatsbyLink } from 'gatsby'
import { Link as LinkStyle } from 'rebass'
import styled from 'styled-components'
import theme from './theme'

const RebassLink = styled(LinkStyle)`
  color: ${theme.colors.red};
`

type IProps = { to: string; [key: string]: any }

const Link: React.SFC<IProps> = ({ children, to, ...styleProps }) => (
  <GatsbyLink to={to} style={{ textDecoration: 'none' }}>
    <RebassLink {...styleProps} css={{ textDecoration: 'none' }}>
      {children}
    </RebassLink>
  </GatsbyLink>
)

export default Link
