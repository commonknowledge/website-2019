/** @jsx jsx */
import { jsx } from "theme-ui"
import { PageFooterCommon, PageFooter } from "../components/page"
import { CardTitle } from "../components/card"
import { Fragment } from "react"

const NotFoundPage = () => (
  <Fragment>
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        m: 4,
      }}
    >
      <h2>There isn’t a page here.</h2>
    </div>

    <PageFooter />
  </Fragment>
)

export default NotFoundPage
