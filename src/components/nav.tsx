/** @jsx jsx */

import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"

export const Link: ViewElement<
  {
    to: string
    variant?: string
  },
  React.AnchorHTMLAttributes<{}>
> = ({ variant: linkVariant = "default", children, to, ...props }) => {
  const variant = "link." + linkVariant

  if (["http", "mail"].some(s => to.startsWith(s))) {
    return (
      <a
        sx={{ variant, userSelect: "none" }}
        target="_blank"
        {...props}
        href={to}
      >
        {children} {to.startsWith("http") && "↗"}
      </a>
    )
  } else {
    return (
      <GatsbyLink
        sx={{ variant, userSelect: "none" }}
        {...(props as any)}
        to={to}
      >
        {children}
      </GatsbyLink>
    )
  }
}
