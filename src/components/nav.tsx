/** @jsx jsx */

import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"
import scrollTo from "animated-scroll-to"
import { MouseEventHandler } from "react"

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

  if (to.startsWith("#")) {
    return (
      <a
        sx={{ variant, userSelect: "none" }}
        {...props}
        href={to}
        onClick={event => {
          const { onClick } = props
          const el = document.querySelector<HTMLElement>(to)
          if (el) {
            if (onClick) {
              onClick(event)
            }

            if (!event.defaultPrevented) {
              event.preventDefault()
              scrollTo(el.offsetTop)
            }
          }
        }}
      >
        {children} {to.startsWith("http") && "↗"}
      </a>
    )
  } else if (["http", "mailto"].some(s => to.startsWith(s))) {
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
