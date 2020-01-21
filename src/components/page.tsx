/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, AspectImage } from "@theme-ui/components"

import { SwitchTransition, CSSTransition } from "react-transition-group"
import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { Match } from "@reach/router"
import { Link } from "../components/nav"
import { CoOpsLogo, CoTechLogo } from "../components/graphics"
import { FC, Fragment, useState, ReactNode, useEffect, useRef } from "react"
import { ViewElement, IconButton } from "./atoms"
import { LogoOneLine } from "../images/logo"
import { BurgerIcon } from "../images/burger"
import { MailChimpForm } from "./mailchimp-form"
import { Topbar } from "./topbar"

const HEADER_HEIGHT = 51

export const PageGlobal: ViewElement = ({ children }) => (
  <Match path="*">
    {({ location }) => (
      <Theme>
        <PageHeader
          dark={location.pathname === "/"}
          extended={location.pathname === "/"}
        />
        {children}
      </Theme>
    )}
  </Match>
)

export const PageLocal: FC = ({ children }) => (
  <Fragment>
    {children}

    <MailChimpForm />

    <Grid as="footer" gap={5} sx={{ m: 4 }}>
      <div sx={{ fontWeight: 500, fontSize: "18px" }}>
        <div>Interested in working with us?</div>
        <Link variant="accent" to="mailto:hello@commonknowledge.coop">
          hello@commonknowledge.coop
        </Link>
      </div>

      <Grid gap={4} columns={2}>
        <FooterBlock title="Visit">
          Space4
          <br />
          113 Fonthill Road
          <br />
          London, N4 3HH
        </FooterBlock>

        <FooterBlock title="Contact">
          {/* <Link>Book a meeting</Link>
<Link>PGP Key</Link> */}
        </FooterBlock>

        <FooterBlock title="Elsewhere">
          <Link to="http://twitter.com/cmmonknowledge">Twitter</Link>
          <Link to="http://github.com/commonknowledge">Github</Link>
          {/* <Link>Git.coop</Link> */}
        </FooterBlock>

        <FooterBlock title="Support our work">
          <Link to="https://opencollective.com/commonknowledge/donate">
            Open Collective
          </Link>
          {/* <Link>Coinbase</Link> */}
        </FooterBlock>
      </Grid>

      <Grid gap={4}>
        <Grid gap={1}>
          <FooterBlock>Company no. 11620742</FooterBlock>
          <FooterBlock>Registered in England and Wales</FooterBlock>
        </Grid>

        <Grid gap={1}>
          <FooterBlock>Privacy Policy</FooterBlock>
          <FooterBlock>Manage Cookies</FooterBlock>
        </Grid>

        <Grid columns={2}>
          <CoOpsLogo />
          <CoTechLogo />
        </Grid>
      </Grid>
    </Grid>
  </Fragment>
)

export const PageHeader: ViewElement<{
  extended?: boolean
  dark?: boolean
}> = ({ children, extended, dark, ...props }) => {
  const animationDuration = 500

  const [open, setOpenValue] = useState(false)
  const [animatingClosed, setAnimatingClosed] = useState(false)
  const colorStyle =
    dark && !open
      ? { color: "white", bg: "black" }
      : {
          color: "black",
          bg: "background",
        }

  // Color transition looks off when moving from dark page to light page if the menu isn't open
  const colorTransition =
    open || animatingClosed
      ? {
          transition: `color ${animationDuration}ms ease-in-out, background ${animationDuration}ms ease-in-out`,
        }
      : {}

  const setOpen = (opening: boolean) => {
    if (!open && opening) {
      setOpenValue(true)
    } else if (open && !opening) {
      setAnimatingClosed(true)
      setOpenValue(false)

      setTimeout(() => {
        setAnimatingClosed(false)
      }, animationDuration)
    }
  }

  return (
    <Fragment>
      <Topbar
        sx={{
          top: HEADER_HEIGHT - 1,
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            ">*": {
              p: 3,
              borderTop: "1px solid white",
              borderTopColor: open ? "white" : "rgba(0,0,0,0)",
              transition: "border-top-color 250ms ease-in-out",
            },
            ...colorTransition,
            ...colorStyle,
          }}
        >
          <NavContent onClick={() => setOpen(false)} />
        </div>
      </Topbar>

      <div
        sx={{
          ...colorStyle,
          ...colorTransition,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2,
          boxSizing: "border-box",
          height: HEADER_HEIGHT,
        }}
      >
        <header
          sx={{
            mx: 3,
            pb: 2,
            pt: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: dark ? "none" : "1px solid #767676",
          }}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            <LogoOneLine sx={{ mr: 2 }} />
          </Link>

          <IconButton onClick={() => setOpen(!open)}>
            <BurgerIcon />
          </IconButton>
        </header>
      </div>

      <div sx={{ height: HEADER_HEIGHT }} />
    </Fragment>
  )
}

export const Hero: ViewElement<{ title: string; image: ReactNode }> = ({
  title,
  image,
  ...props
}) => (
  <div sx={{ display: "flex", flexDirection: "column" }} {...props}>
    <h2 sx={{ fontSize: "24px", lineHeight: "125%", fontWeight: 500 }}>
      {title}
    </h2>
    <div>{image}</div>
  </div>
)

export const FooterBlock: ViewElement<{ title?: string }> = ({
  title,
  children,
  ...props
}) => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      fontSize: "15px",
      lineHeight: "133%",
    }}
    {...props}
  >
    {title && (
      <h3 sx={{ fontSize: "inherit", fontWeight: 600, m: 0 }}>{title}</h3>
    )}
    {children}
  </div>
)

const NavContent: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Fragment>
    <Link onClick={onClick} to="/about">
      About
    </Link>
    <Link onClick={onClick} to="/writing">
      Writing
    </Link>
    <Link onClick={onClick} to="/work">
      Work
    </Link>
    <Link onClick={onClick} to="/contact">
      Contact
    </Link>
  </Fragment>
)
