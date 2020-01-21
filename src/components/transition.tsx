import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { CSSTransition } from "react-transition-group"
import { ViewElement } from "./atoms"
import { CSSTransitionProps } from "react-transition-group/CSSTransition"

const has = (key: string, obj: any) =>
  Object.prototype.hasOwnProperty.call(obj, key)

const keyframes = [
  "appear",
  "enter",
  "exit",
  "appear-active",
  "enter-active",
  "exit-active",
  "appear-done",
  "enter-done",
  "exit-done",
]

export const StyledTransition: ViewElement<
  {
    transitions: any
  },
  CSSTransitionProps
> = styled(({ transitions, className, ...props }) => (
  <CSSTransition className={className} classNames={className} {...props} />
))`
  ${({ transitions }) =>
    keyframes
      .map(keyframe => {
        const objectKey = keyframe.replace(/(-[a-z])/, v =>
          v.slice(1).toUpperCase()
        )
        if (has(objectKey, transitions)) {
          return css`
            &-${keyframe} {
              ${transitions[objectKey]}
            }
          `
        }
        return null
      })
      .filter(x => x !== null)}
`
