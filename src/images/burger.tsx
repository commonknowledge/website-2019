import React from "react"
import { SvgGraphic } from "../components/image"

export const BurgerIcon: SvgGraphic = props => (
  <SvgGraphic viewBox="0 0 20 14" {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M0 1.527h20M0 7.271h20M0 13.016h20"
    />
  </SvgGraphic>
)
