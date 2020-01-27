/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { PageGlobal, PageLocal } from "./src/components/page"

export const wrapRootElement = ({ element }) => {
  return <PageGlobal>{element}</PageGlobal>
}

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      src="https://config.metomic.io/config.js?id=prj:099e4e54-0922-481a-826c-52839ea79e1f"
      crossorigin
      charset="utf-8"
    />,
    <script
      src="https://consent-manager.metomic.io/embed.js"
      crossorigin
      charset="utf-8"
    />,
  ])

  setPostBodyComponents([
    <a href="javascript:window.Metomic('ConsentManager:show')">
      manage cookies
    </a>,
  ])
}
