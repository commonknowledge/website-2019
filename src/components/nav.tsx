/** @jsx jsx */

import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"

type LinkProps = {
  to: string
  variant?: string
  icon?: boolean
}

export const Link: ViewElement<LinkProps, React.AnchorHTMLAttributes<{}>> = ({
  variant: linkVariant = "default",
  children,
  icon,
  to,
  ...props
}) => {
  const variant = "link." + linkVariant

  if (["http", "mailto"].some(s => to.startsWith(s))) {
    return (
      <a
        {...props}
        sx={{ variant, userSelect: "none" }}
        target="_blank"
        href={to}
      >
        {children}
        {to.startsWith("http") && !icon && "↗"}
      </a>
    )
  } else {
    return (
      <GatsbyLink
        {...(props as any)}
        sx={{ variant, userSelect: "none" }}
        activeClassName="active"
        to={to}
      >
        {children}
      </GatsbyLink>
    )
  }
}

export const LiteralLink: ViewElement<LinkProps> = props => (
  <Link {...props}>{props.to.replace(/^.*:\/\//, "")}</Link>
)
