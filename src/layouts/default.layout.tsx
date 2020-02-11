/** @jsx jsx */

import { jsx } from "theme-ui"
import {
  ReactElement,
  ReactChildren,
  Children,
  isValidElement,
  Fragment,
} from "react"
import { ViewElement } from "../components/atoms"
import { PageFooter } from "../components/page"
import SEO from '../components/seo';

const DefaultLayout: ViewElement = ({ children, location: { pathname } }) => (
  <Fragment>
    <SEO title="Common Knowledge" path={pathname} />
    <div
      sx={{
        m: 4,
        img: {
          maxWidth: 600,
        },
        hr: {
          my: 4,
          borderTop: "1px solid #767676",
        },
        h1: {
          mt: [null, 3],
          fontSize: [24, 32],
          lineHeight: ["125%", "110%"],
        },
        h2: {
          mt: 0,
          ml: [null, null, 4],
          fontSize: [15, 18],
          fontWeight: 600,
          position: [null, null, "absolute"],
          left: 0,
        },
        h3: {
          fontSize: 18,
          m: 0,
          mb: 2,
          fontWeight: 600,
        },
        h4: {
          fontSize: 18,
          m: 0,
          mb: 1,
          fontWeight: 600,
        },
        p: {
          m: 0,
          lineHeight: "133%",
          maxWidth: 600,
          fontSize: [15, 18],
          mb: 3,
        },
        ol: {
          position: "relative",
          listStyle: "none",
          pl: [3, null, 4],
          lineHeight: "125%",
          fontWeight: 500,
          mb: 3,
          fontSize: [15, null, 24],
          counterReset: "list-counter",
          "> li:before": {
            content: "counter(list-counter)",
            counterIncrement: "list-counter",
            position: "absolute",
            left: 0,
            color: "accent",
          },
          "> li:not(:last-of-type)": {
            mb: 2,
          },
        },
      }}
    >
      {layoutFromMarkdown(children as any)}
    </div>
    <PageFooter />
  </Fragment>
)

type MdxElement = ReactElement<MdxElementProps>
type MdxElementProps = {
  mdxType: string
  children?: ReactChildren
}

const layoutFromMarkdown = (content: ReactChildren) => {
  const mdx = Array.isArray(content) ? content : [content]

  let group: MdxElement[] = []
  const groupedContent = []

  const isImageBlock = (x: MdxElement) => {
    const child =
      x && (Children.toArray(x.props.children)[0] as MdxElement | undefined)
    return isValidElement(child) && child.props.mdxType === "img"
  }

  const nextGroup = () => {
    if (isImageBlock(group[group.length - 1])) {
      const image = group.pop()

      groupedContent.push(
        <section
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row"],
            width: "100%",
          }}
          key={groupedContent.length}
        >
          <div
            sx={{
              width: [null, null, "50%"],
              "h2 + *": {
                mt: [null, null, 5],
              },
            }}
            key={groupedContent.length}
          >
            {group}
          </div>
          <aside
            sx={{
              width: [null, null, "50%"],
              ml: [null, null, 3],
              textAlign: "right",
            }}
          >
            {image}
          </aside>
        </section>
      )
    } else {
      groupedContent.push(
        <section
          key={groupedContent.length}
          sx={{ marginLeft: [null, null, "50%"] }}
        >
          {group}
        </section>
      )
    }

    group = []
  }

  for (const block of mdx) {
    if (
      isValidElement<MdxElementProps>(block) &&
      block.props.mdxType === "hr"
    ) {
      nextGroup()
      groupedContent.push(block)
    } else {
      group.push(block)
    }
  }

  nextGroup()
  return groupedContent
}

export default DefaultLayout
