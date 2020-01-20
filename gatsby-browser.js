/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "@csstools/normalize.css"
import React from "react"
import { Page } from "./src/components/page"

export const wrapRootElement = ({ element }) => {
  return <Page>{element}</Page>
}
