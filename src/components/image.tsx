/** @jsx jsx */

import { jsx } from "theme-ui"
import React, { ComponentType, SVGProps, FC } from "react"
import { ViewElement } from "./atoms"

type SvgGraphicProps = {
  viewBox: string
}

const getDimensions = (vb: string) =>
  vb
    .split(" ")
    .slice(2)
    .map(Number)

export type SvgGraphic = FC<SVGProps<{}>>

export const SvgGraphic: ViewElement<SvgGraphicProps, SVGProps<{}>> = ({
  ...props
}: SvgGraphicProps & { viewBox: string }) => {
  const [w, h] = getDimensions(props.viewBox)
  return <svg fill="none" width={w} height={h} {...props} />
}
