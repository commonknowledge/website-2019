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
import { ContentCard } from "../components/content-card"
import { PageFooter } from "../components/page"

const WorkListPage: PageRoot<{ work: Connection<ContentItem> }> = ({
  data: { work },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <CardList>
      {work.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
    </CardList>

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query WorkListPage {
    work: allMdx(
      filter: { fileAbsolutePath: { glob: "**/work/*" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default WorkListPage
