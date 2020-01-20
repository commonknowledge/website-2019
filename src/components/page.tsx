/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, AspectImage } from "@theme-ui/components"

import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { Match } from "@reach/router"
import { Link } from "../components/nav"
import { CoOpsLogo, CoTechLogo } from "../components/graphics"
import { FC, Fragment, useState, ReactNode } from "react"
import Sidebar, { SidebarProps } from "react-sidebar"
import { ViewElement, IconButton } from "./atoms"
import { LogoOneLine } from "../images/logo"
import { BurgerIcon } from "../images/burger"
import { MailChimpForm } from "./mailchimp-form"

export const Page: ViewElement = ({ children }) => (
  <Match path="*">
    {({ location }) => (
      <Theme>
        <PageHeader extended={location.pathname === "/"}>
          <Hero
            sx={{ px: 3, pt: 0, pb: 0 }}
            title="Working directly with grassroots activists, we design digital tools that make radical change possible."
            image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
          />
        </PageHeader>

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

export const PageHeader: ViewElement<{ extended?: boolean }> = ({
  children,
  extended,
  ...props
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      sx={{
        transition: "color 250ms ease-in-out, background 250ms ease-in-out",
        ...(!extended
          ? {
              maxHeight: 52,
              overflow: "hidden",
              color: "black",
              bg: "rgba(0,0,0,0)",
              borderBottom: "1px solid black",
            }
          : { color: "white", bg: "black" }),
      }}
      {...props}
    >
      <header
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justiyContent: "space-between",
          mx: 3,
          pb: 4,
          pt: 3,
        }}
      >
        <Link to="/">
          <LogoOneLine sx={{ mr: 2 }} />
        </Link>
      </header>

      {children}

      <BurgerBar open={open} onSetOpen={setOpen}>
        <IconButton
          sx={{ m: 3, position: "absolute", top: 0, right: 0 }}
          onClick={() => setOpen(true)}
        >
          <BurgerIcon />
        </IconButton>
      </BurgerBar>
    </div>
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

const BurgerBar: ViewElement<SidebarProps> = props => (
  <Sidebar
    pullRight
    sidebar={
      <div
        sx={{
          backgroundColor: "white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minWidth: 300,
          p: 3,
          boxSizing: "border-box",
          ">*": {
            mb: 2,
          },
        }}
      >
        <NavContent />
      </div>
    }
    {...props}
  ></Sidebar>
)

const NavContent: FC = () => (
  <Fragment>
    <Link to="/about">About</Link>
    <Link to="/writing">Writing</Link>
    <Link to="/work">Work</Link>
    <Link to="/contact">Contact</Link>
  </Fragment>
)
