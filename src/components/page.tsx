/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from "@theme-ui/components"

import { Theme } from "../components/theme"
import { Match } from "@reach/router"
import { Link } from "../components/nav"
import { CoOpsLogo, CoTechLogo } from "../components/graphics"
import { FC, Fragment, useState, ReactNode } from "react"
import { ViewElement, IconButton } from "./atoms"
import { LogoOneLine } from "../images/logo"
import { BurgerIcon } from "../images/burger"
import { MailChimpForm } from "./mailchimp-form"
import { Topbar } from "./topbar"
import { ContactDetails } from "./contact"

const HEADER_HEIGHT = 45

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

export const PageFooter: FC = () => (
  <Fragment>
    <MailChimpForm />

    <Grid id="contact" gap={5} sx={{ m: 4, mb: 0 }}>
      <div sx={{ fontWeight: 500, fontSize: [15, 18, 38] }}>
        <div>Interested in working with us?</div>
        <Link variant="accent" to="mailto:hello@commonknowledge.coop">
          hello@commonknowledge.coop
        </Link>
      </div>

      <ContactDetails />
    </Grid>
  </Fragment>
)

export const PageFooterCommon = () => (
  <Grid
    as="footer"
    sx={{ m: 4, fontSize: [12, 15], color: "#767676" }}
    columns={[1, 2, null, 4]}
    gap={[3, 4]}
  >
    <div>
      <FooterBlock>Company no. 11620742</FooterBlock>
      <FooterBlock>Registered in England and Wales</FooterBlock>
    </div>

    <div>
      <FooterBlock>Privacy Policy</FooterBlock>
      <FooterBlock>Manage Cookies</FooterBlock>
    </div>

    <div sx={{ display: "flex", flexDirection: "row" }}>
      <Link icon to="https://www.uk.coop/">
        <CoOpsLogo sx={{ mr: 6 }} />
      </Link>
      <Link icon to="https://www.coops.tech/">
        <CoTechLogo />
      </Link>
    </div>
  </Grid>
)

export const PageHeader: ViewElement<{
  extended?: boolean
  dark?: boolean
}> = ({ children, extended, dark }) => {
  const animationDuration = 500

  const [open, setOpenValue] = useState(false)
  const [animatingClosed, setAnimatingClosed] = useState(false)
  const colorStyle =
    dark && !open
      ? { color: "white", bg: "rgba(0,0,0,0.9)" }
      : {
          color: "black",
          bg: open ? "background" : "backgroundTranslucent",
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
            mx: 4,
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

          <div
            sx={{
              width: "50%",
              display: ["none", null, "flex"],
              flexDirection: "row",
              "> *": {
                mr: 4,
                opacity: 1,
              },
              "> .active": {
                color: "black",
              },
              "> *:not(.active)": {
                color: dark ? "rgba(255,255,255,0.75)" : "#767676",
              },
            }}
          >
            <NavContent />
          </div>

          <IconButton
            sx={{
              position: "absolute",
              right: 3,
              display: [null, null, "none"],
              color: dark && !open ? "white" : "accent",
              ...colorTransition,
            }}
            onClick={() => setOpen(!open)}
          >
            <BurgerIcon sx={{ position: "relative", top: -0.5 }} />
          </IconButton>
        </header>
      </div>

      <div sx={{ ...colorStyle, height: HEADER_HEIGHT }} />
    </Fragment>
  )
}

export const Hero: ViewElement<{ title: string; image: ReactNode }> = ({
  title,
  image,
  ...props
}) => (
  <div
    sx={{
      position: "relative",
      width: "100%",
      height: [null, null, 350],
      paddingTop: HEADER_HEIGHT,
      marginTop: -HEADER_HEIGHT,
    }}
    {...props}
  >
    <h2
      sx={{
        position: ["relative", null, "absolute"],
        width: [null, null, "50%"],
        bottom: [null, null, "50%"],
        left: [null, null, "50%"],
        maxWidth: 600,
        fontSize: ["24px", "32px"],
        transform: [null, null, "translateY(50%)"],
        boxSizing: "border-box",
        lineHeight: "125%",
        fontWeight: 500,
        m: 0,
        pl: [4, null, 0],
        py: [3, null, 0],
        pr: 5,
      }}
    >
      {title}
    </h2>
    <div
      sx={{
        maxHeight: 217,
        position: ["relative", null, "absolute"],
        left: 0,
        bottom: 0,
        width: [null, null, "50%"],
        textAlign: "center",
      }}
    >
      {image}
    </div>
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
      lineHeight: "150%",
      fontWeight: 300,
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
    <Link onClick={onClick} to="/work">
      Work
    </Link>
    <Link onClick={onClick} to="/writing">
      Writing
    </Link>
    <Link onClick={onClick} to="/about">
      About
    </Link>
    <Link onClick={onClick} to="/contact">
      Contact
    </Link>
  </Fragment>
)
