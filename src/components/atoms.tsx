/** @jsx jsx */

import { jsx } from "theme-ui"
import { FC, HTMLAttributes, ButtonHTMLAttributes } from "react"

export type ViewElement<Props = {}, Attrs = HTMLAttributes<{}>> = FC<
  Props & Omit<Attrs, keyof Props>
>

export const IconButton: ViewElement<ButtonHTMLAttributes<{}>> = props => (
  <button
    sx={{
      border: "none",
      outline: "none",
      bg: "rgba(0,0,0,0)",
      cursor: "pointer",
      color: "inherit",
    }}
    {...props}
  />
)

export const BackgroundImage: ViewElement<{ src: string }> = ({
  src,
  ...props
}) => <figure sx={{ backgroundImage: "url('" + src + "')" }} {...props} />
