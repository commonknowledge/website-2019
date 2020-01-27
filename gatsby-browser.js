/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "@csstools/normalize.css"
import React, { Fragment } from "react"
import { PageGlobal, PageLocal, PageFooterCommon } from "./src/components/page"

export const wrapRootElement = ({ element }) => {
  return <PageGlobal>{element}</PageGlobal>
}

export const wrapPageElement = ({ element }) => (
  <Fragment>
    {element}
    <PageFooterCommon />
  </Fragment>
)
