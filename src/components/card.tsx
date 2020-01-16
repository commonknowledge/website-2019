/** @jsx jsx */
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"
import { ReactNode } from "react"

export const Card: ViewElement = props => (
  <section sx={{ position: "relative" }} {...props} />
)

export const CardHeader: ViewElement = props => (
  <header
    sx={{
      fontFamily: "Space Mono",
      fontSize: "10px",
      boxSizing: "border-box",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      p: 3,
    }}
    {...props}
  />
)

export const CardMeta: ViewElement = ({ children, ...props }) => (
  <div
    sx={{ display: "inline-block", whiteSpace: "nowrap", mb: 1, width: "50%" }}
  >
    {children}
  </div>
)

export const CardTitle: ViewElement = props => (
  <h2
    sx={{ px: 3, m: 0, mb: 2, fontWeight: 500, fontSize: "32px" }}
    {...props}
  />
)

export const CardContent: ViewElement = props => (
  <div sx={{ px: 3, m: 0, lineHeight: "147%", fontSize: "15px" }} {...props} />
)
