/** @jsx jsx */

import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"

export const Link: ViewElement<
  {
    to: string
  },
  React.AnchorHTMLAttributes<{}>
> = ({ children, to, ...props }) => {
  if (["http", "mail"].some(s => to.startsWith(s))) {
    return (
      <a {...props} href={to}>
        {children} {to.startsWith("http") && "↗"}
      </a>
    )
  } else {
    return (
      <GatsbyLink {...(props as any)} to={to}>
        {children}
      </GatsbyLink>
    )
  }
}
