/** @jsx jsx */
import { jsx } from "theme-ui"
import { ViewElement } from "./atoms"
import { useRef, useState, Fragment, useEffect } from "react"
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock"

export type TopbarProps = {
  open: boolean
  onClose: () => void
}

export const Topbar: ViewElement<TopbarProps> = ({
  open,
  onClose,
  children,
  ...props
}) => {
  const [innerContent, setInnerContent] = useState<HTMLDivElement | null>(null)
  useEffect(() => {
    if (innerContent) {
      if (open) {
        disableBodyScroll(innerContent)
      } else {
        enableBodyScroll(innerContent)
      }
    }
  }, [open, innerContent])

  return (
    <Fragment>
      <div
        sx={{
          position: "fixed",
          width: "100%",
          height: "100%",
          bg: "rgba(0,0,0,0.8)",
          opacity: open ? 1 : 0,
          transition: "opacity 500ms ease-in-out",
          zIndex: 1,
          ...(open ? {} : { pointerEvents: "none" }),
        }}
        onClick={onClose}
      />
      <div
        sx={{
          position: "fixed",
          width: "100%",
          bg: "background",
          userSelect: "none",
          zIndex: 1000,
          overflow: "hidden",
          transition: "max-height 500ms ease-in-out",
          maxHeight: innerContent && open ? innerContent.clientHeight : 0,
        }}
        {...props}
      >
        <div
          ref={setInnerContent}
          sx={{
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </div>
    </Fragment>
  )
}
