import * as React from 'react'
import { Link as _GatsbyLink } from 'gatsby'
import { Text } from 'rebass'
import styled from 'styled-components'
import { style } from 'styled-system'

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const StyledLink = (component: any) => {
  const c = styled(component)`
    color: ${props => props.theme.colors.primary};
    ${textDecoration};
  `

  c.propTypes = {
    ...textDecoration.propTypes,
  }

  c.defaultProps = {
    textDecoration: 'none',
  }

  return c
}

const InternalLink = StyledLink(_GatsbyLink)
const Link = StyledLink('a')
const ExternalLink: React.SFC<any> = ({
  children,
  href,
  target,
  title,
  ...props
}) => (
  <Text {...props} css={{ display: 'inline' }}>
    <Link {...{ href, target, title }}>{children}</Link>
  </Text>
)

export { InternalLink, ExternalLink }
