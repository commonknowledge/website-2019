/** @jsx jsx */
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"
import { Content } from "./page"

export const CardList: ViewElement = props => (
  <div
    {...props}
    sx={{ "> *:not(:last-child)": { borderBottom: "1px solid #767676" } }}
  />
)

export const Card: ViewElement = props => (
  <section sx={{ position: "relative", mx: 4, py: 4 }} {...props} />
)

export const CardHeader: ViewElement = props => (
  <header
    sx={{
      fontFamily: "monospace",
      fontSize: [10, 14],
      boxSizing: "border-box",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      mb: [2, null, 3],
    }}
    {...props}
  />
)

export const CardMeta: ViewElement<{ label?: string }> = ({
  children,
  label,
  ...props
}) => (
  <div
    sx={{
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
    {...props}
  >
    {label && (
      <div sx={{ display: ["none", null, "block"], color: "#767676", mb: 1 }}>
        {label}
      </div>
    )}
    {children}
  </div>
)

export const CardTitle: ViewElement = props => (
  <h2 sx={{ m: 0, mb: 2, fontWeight: 500, fontSize: [32, 54] }} {...props} />
)

export const CardContent: ViewElement = props => (
  <div
    sx={{
      lineHeight: "147%",
      fontSize: ["15px", "18px"],
    }}
    {...props}
  />
)
