/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
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
  getContentType,
  PageRoot,
  Connection,
  ContentItem,
} from "../data/content-type"
import { NumericDate } from "../data/date"
import { ContentCard } from "../components/content-card"
import { PageFooter } from "../components/page"

const WritingListPage: PageRoot<{ writing: Connection<ContentItem> }> = ({
  data: { writing },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <CardList>
      {writing.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
    </CardList>

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query WritingListPage {
    writing: allMdx(
      filter: { fileAbsolutePath: { glob: "**/writing/*" } }
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

export default WritingListPage
