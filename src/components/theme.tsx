import * as React from "react"
import { ThemeProvider } from "theme-ui"
import { Global, css } from "@emotion/core"
import { Fragment } from "react"
import { memoize, times } from "lodash"

const fib = memoize((x: number): number => (x === 0 ? x : x + fib(x - 1)))

export const theme = {
  fonts: {
    body: "'TeX Gyre Heros', system-ui, sans-serif",
    heading: "'TeX Gyre Heros', system-ui, sans-serif",
    monospace: "'Space Mono', Menlo, monospace",
    brand: "'Space Grotesk'",
  },
  space: times(10, x => 3 * fib(x)),
  fontSizes: [8, 10, 14, 15, 18, 24, 32, 38, 54],
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: "#111",
    background: "#E5E5E5",
    muted: "#ACACAC",
    primary: "#111",
    secondary: "#FC0D1B",
    accent: "#FC0D1B",
  },
  link: {
    default: {
      opacity: 0.7,
      color: "inherit",
      textDecoration: "inherit",
      "&:hover": {
        color: "white",
      },
    },
    accent: {
      color: "accent",
      textDecoration: "inherit",
      "&:hover": {
        opacity: 0.7,
      },
    },
  },
  buttons: {
    primary: {
      p: 3,
      borderRadius: 6,
      bg: "#767676",
      color: "white",
      width: "100%",
      transition: "opacity 250ms ease-in-out",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
  forms: {
    label: {},
    input: {
      color: "black",
      p: 3,
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
      borderBottom: theme => "3px solid " + theme.colors.accent,
      "&:hover": {
        color: "accent",
      },
    },
    p: {
      lineHeight: "body",
      mb: "0.5em",
      mt: "0.5em",
    },
    h1: {},
    h2: { fontWeight: 500, m: 0, mb: 2 },
    h3: {},
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
            font-size: ${theme.fontSizes[3]}px;
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
  font-family: "Space Grotesk";
  src: url("/fonts/SpaceGrotesk-Semibold.woff") format("woff");
  font-weight: semibold;
  font-style: normal;
}
@font-face {
  font-family: "Space Grotesk";
  src: url("/fonts/SpaceGrotesk-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Space Mono";
  src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}
/* TeX Gyre Heros - body font */
@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/fonts/texgyreheros-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/fonts/texgyreheros-italic-webfont.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/fonts/texgyreheros-bold-webfont.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "TeX Gyre Heros";
  src: url("/fonts/texgyreheros-bolditalic-webfont.woff")
    format("woff");
  font-weight: bold;
  font-style: italic;
}
`
