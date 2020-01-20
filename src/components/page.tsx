/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, AspectImage } from "@theme-ui/components"

import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { Match } from "@reach/router"
import { Link } from "../components/nav"
import { CoOpsLogo, CoTechLogo } from "../components/graphics"
import { FC, Fragment, useState, ReactNode } from "react"
import { ViewElement, IconButton } from "./atoms"
import { LogoOneLine } from "../images/logo"
import { BurgerIcon } from "../images/burger"
import { MailChimpForm } from "./mailchimp-form"
import { Topbar, TopbarProps } from "./topbar"

const HEADER_HEIGHT = 52

export const Page: ViewElement = ({ children }) => (
  <Match path="*">
    {({ location }) => (
      <Theme>
        <PageHeader
          dark={location.pathname === "/"}
          extended={location.pathname === "/"}
        />

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
      </Theme>
    )}
  </Match>
)

export const PageHeader: ViewElement<{
  extended?: boolean
  dark?: boolean
}> = ({ children, extended, dark, ...props }) => {
  const [open, setOpen] = useState(false)
  const colorStyle =
    dark && !open
      ? { color: "white", bg: "black" }
      : {
          color: "black",
          bg: "background",
        }

  return (
    <Fragment>
      <Topbar
        sx={{
          top: HEADER_HEIGHT,
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
            },
            transition: "color 500ms ease-in-out, background 500ms ease-in-out",
            ...colorStyle,
          }}
        >
          <NavContent onClick={() => setOpen(false)} />
        </div>
      </Topbar>

      <header
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2,
          transition:
            "max-height 500ms ease-in-out, color 500ms ease-in-out, background 500ms ease-in-out",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 3,
          pb: 4,
          pt: 3,
          height: HEADER_HEIGHT,
          boxSizing: "border-box",
          ...colorStyle,
        }}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <LogoOneLine sx={{ mr: 2 }} />
        </Link>

        <IconButton onClick={() => setOpen(!open)}>
          <BurgerIcon />
        </IconButton>
      </header>

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
    <h2 sx={{ fontWeight: 500, fontSize: "24px" }}>{title}</h2>
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
