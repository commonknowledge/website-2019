import * as React from "react"
import { ThemeProvider } from "theme-ui"
import { Global, css } from "@emotion/core"
import { Fragment } from "react"

export const theme = {
  fonts: {
    body: "'TeX Gyre Heros', system-ui, sans-serif",
    heading: "'TeX Gyre Heros', system-ui, sans-serif",
    monospace: "'Space Mono', Menlo, monospace",
    brand: "'Space Grotesk'",
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: "#111",
    background: "#EFEFEF",
    muted: "#ACACAC",
    primary: "#111",
    secondary: "#FC0D1B",
    accent: "#FC0D1B",
  },
  styles: {
    a: {
      color: "primary",
      textDecoration: 'none',
      borderBottom: theme => "3px solid " + theme.colors.secondary,
      '&:hover': {
        color: "secondary",
      }
    },
    p: {
      lineHeight: 'body', mb: "0.5em", mt: "0.5em"
    },
    h1: { mb: "0.1em", mt: "1em" },
    h2: { mb: "0.1em", mt: "1em" },
    h3: { mb: "0.1em", mt: "1em" },
    h4: { mb: "0.1em", mt: "1em" }
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
            margin: 0;
            padding: 0;
            min-height: 100%;
            background: ${theme.colors.background};
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes[3]}px;
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
// @font-face {
//   font-family: "Space Mono";
//   src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
//   font-weight: normal;
//   font-style: normal;
// }
// @font-face {
//   font-family: "Space Mono";
//   src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
//   font-weight: bold;
//   font-style: normal;
// }
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