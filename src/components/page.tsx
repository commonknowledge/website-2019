/** @jsx jsx */

import { jsx } from "theme-ui"
import { FC, Fragment, useState, ReactNode } from "react"
import Sidebar, { SidebarStyles, SidebarProps } from "react-sidebar"
import { ViewElement, IconButton } from "./atoms"
import { LogoOneLine } from "../images/logo"
import { Link } from "./nav"
import { BurgerIcon } from "../images/burger"

export const PageHeader: ViewElement = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)

  return (
    <div {...props}>
      <header
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justiyContent: "space-between",
          mx: 3,
          pb: 4,
          pt: 3,
          borderBottom: "1px solid black",
        }}
      >
        <LogoOneLine sx={{ mr: 2 }} />
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
    <Link to="'/work">About</Link>
    <Link to="'/writing">Writing</Link>
    <Link to="'/about">Work</Link>
    <Link to="'/contact">Contact</Link>
  </Fragment>
)
