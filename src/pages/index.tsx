/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import { LiteralLink } from "../components/nav"
import { graphql } from "gatsby"
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
  CardList,
} from "../components/card"
import { Fragment } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Hero } from "../components/page"
import { AspectImage } from "@theme-ui/components"
import {
  Connection,
  ContentItem,
  PageRoot,
  getContentType,
} from "../data/content-type"
import { YearRange } from "../data/date"
import { ArticleCard } from "../components/content-card"

const IndexPage: PageRoot<{ work: Connection<ContentItem> }> = ({
  data: { work },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ px: 3, pt: 0, pb: 0, bg: "black", color: "white" }}
      title="Working directly with grassroots activists, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
    />

    <CardList>
      {work.edges.map(({ node }) => (
        <ArticleCard content={node} />
      ))}
    </CardList>
  </Fragment>
)

export const pageQuery = graphql`
  query HomePage {
    work: allMdx(filter: { fileAbsolutePath: { glob: "**/work/*" } }) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default IndexPage
