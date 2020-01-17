/** @jsx jsx */
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const CardList: ViewElement = props => (
  <div
    {...props}
    sx={{ "> *:not(:last-of-type)": { borderBottom: "1px solid black" } }}
  />
)

export const Card: ViewElement = props => (
  <section sx={{ position: "relative", mx: 4, py: 4 }} {...props} />
)

export const CardHeader: ViewElement = props => (
  <header
    sx={{
      fontFamily: "Space Mono",
      fontSize: "10px",
      boxSizing: "border-box",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      pb: 3,
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
  <h2 sx={{ m: 0, mb: 2, fontWeight: 500, fontSize: "32px" }} {...props} />
)

export const CardContent: ViewElement = props => (
  <div sx={{ m: 0, lineHeight: "147%", fontSize: "15px" }} {...props} />
)
