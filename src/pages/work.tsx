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
import {
  PageRoot,
  Connection,
  ContentItem,
  getContentType,
} from "../data/content-type"
import { YearRange } from "../data/date"
import { ArticleCard } from "../components/article-card"

const WorkListPage: PageRoot<{ work: Connection<ContentItem> }> = ({
  data: { work },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <CardList>
      {work.edges.map(({ node }) => (
        <ArticleCard key={node.id} content={node} />
      ))}
    </CardList>
  </Fragment>
)

export const pageQuery = graphql`
  query WorkListPage {
    work: allMdx(filter: { fileAbsolutePath: { glob: "**/work/*" } }) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default WorkListPage
