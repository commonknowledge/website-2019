import * as React from "react"
import { ThemeProvider } from "theme-ui"
import { Global, css } from "@emotion/core"
import { Fragment } from "react"
import { memoize, times } from "lodash"

const fib = memoize((x: number): number => (x === 0 ? x : x + fib(x - 1)))

export const theme = {
  fonts: {
    body: "'IBM Plex Sans', system-ui, sans-serif",
    heading: "'IBM Plex Sans', system-ui, sans-serif",
    monospace: "'Space Mono', Menlo, monospace",
  },
  breakpoints: ["40em", "52em", "72em"],
  space: times(10, x => 2.5 * fib(x)),
  fontSizes: [8, 10, 14, 15, 18, 24, 32, 38, 54],
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: "#111",
    background: "#F0F0F0",
    backgroundTranslucent: "rgba(240,240,240,0.95)",
    muted: "#ACACAC",
    primary: "#111",
    secondary: "#00E8A2",
    accent: "#00E8A2",
  },
  link: {
    default: {
      opacity: 0.7,
      color: "inherit",
      textDecoration: "inherit",
      "@media (hover: hover)": {
        "&:hover": {
          opacity: 0.4,
        },
      },
    },
    accent: {
      color: "accent",
      textDecoration: "inherit",
      "@media (hover: hover)": {
        "&:hover": {
          opacity: 0.7,
        },
      },
    },
  },
  buttons: {
    primary: {
      p: "1em",
      fontFamily: "body",
      userSelect: "none",
      outline: "none",
      borderRadius: 6,
      bg: "#767676",
      color: "white",
      width: "100%",
      transition: "opacity 250ms ease-in-out",
      cursor: "pointer",
      "@media (hover: hover)": {
        "&:hover": {
          opacity: 0.8,
        },
      },
    },
  },
  forms: {
    label: {},
    input: {
      color: "black",
      p: "1em",
      borderRadius: 6,
      transition: "border-color 250ms ease-in-out",
      border: "2px solid rgba(0,0,0,0)",
      "&:focus": {
        borderColor: "secondary",
        outline: "none",
      },
    },
  },
  styles: {
    a: {
      color: "primary",
      textDecoration: "none",
      borderBottom: theme => "1px solid " + theme.colors.accent,
      "&:hover": {
        color: "accent",
      },
    },
    blockquote: {
      fontStyle: "italic",
      ml: 0,
      pl: 4,
      color: "#767676",
      borderLeft: theme => "1px solid " + theme.colors.accent,
    },
    p: {
      lineHeight: "body",
      mb: "0.5em",
      mt: "0.5em",
    },
    h1: {},
    h2: { fontWeight: 500, mb: 3, "&:not(:first-of-type)": { mt: 5 } },
    h3: { mt: 4, mb: 2 },
    h4: {},
  },
}

export const Theme = ({ children }) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${fontStack};
          html,
          body {
            -webkit-tap-highlight-color: transparent;
            margin: 0;
            padding: 0;
            min-height: 100%;
            background: ${theme.colors.background};
            font-family: ${theme.fonts.body};
            font-size: ${[theme.fontSizes[3]]}px;
          }
          ::selection {
            background: ${theme.colors.text};
            color: #ffffff;
          }
        `}
      />
      {children}
    </ThemeProvider>
  </Fragment>
)

const fontStack = `
/* Space Grotesk - header */
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
`
