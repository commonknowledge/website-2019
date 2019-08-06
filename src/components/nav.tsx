import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Styled } from "theme-ui"

export const Link: React.FC<
  {
    to: string,
    sx?: any
  } & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, to, ...props }) => {
  if (["http", "mail"].some(s => to.startsWith(s))) {
    return (
      <Styled.a {...props} href={to}>
        {children} {to.startsWith("http") && "↗"}
      </Styled.a>
    )
  } else {
    return (
      <GatsbyLink {...(props as any)} to={to}>
        {children}
      </GatsbyLink>
    )
  }
}
