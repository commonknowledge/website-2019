/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { ViewElement } from "../components/atoms"

const DefaultLayout: ViewElement = ({ children }) => (
  <div sx={{ p: 3 }}>
    <MDXProvider
      components={{
        h1: props => (
          <p
            sx={{
              m: 0,
              mb: 4,
              fontWeight: 500,
              fontSize: 24,
              lineHeight: "125%",
            }}
            {...props}
          />
        ),
        h2: props => (
          <h3
            sx={{
              m: 0,
              mb: 3,
              fontSize: 15,
              fontWeight: 600,
              color: "accent",
            }}
            {...props}
          />
        ),
        h3: props => (
          <h4
            sx={{
              fontSize: 15,
              m: 0,
              mb: 2,
              fontWeight: 600,
            }}
            {...props}
          />
        ),
        h4: props => (
          <h4
            sx={{
              fontSize: 15,
              m: 0,
              mb: 1,
              fontWeight: 600,
            }}
            {...props}
          />
        ),
        p: props => (
          <p
            sx={{
              m: 0,
              lineHeight: "133%",
              mb: 3,
            }}
            {...props}
          />
        ),
        hr: props => (
          <hr
            sx={{
              my: 4,
              height: 1,
              backgroundColor: "#767676",
              border: "none",
            }}
            {...props}
          />
        ),
        ol: props => (
          <ol
            sx={{
              position: "relative",
              listStyle: "none",
              pl: 3,
              lineHeight: "125%",
              fontWeight: 500,
              counterReset: "list-counter",
              "> li:before": {
                content: "counter(list-counter)",
                counterIncrement: "list-counter",
                position: "absolute",
                left: 0,
                color: "accent",
              },
              "> li:not(:last-of-type)": {
                mb: 2,
              },
            }}
            {...props}
          />
        ),
      }}
    >
      {children}
    </MDXProvider>
  </div>
)

export default DefaultLayout
