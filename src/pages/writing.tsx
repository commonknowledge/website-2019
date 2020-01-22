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

const WritingListPage: PageRoot<{ writing: Connection<ContentItem> }> = ({
  data: { writing },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <CardList>
      {writing.edges.map(({ node }) => (
        <Card key={node.id}>
          <CardHeader>
            <CardMeta>{getContentType(node)}</CardMeta>
            <CardMeta>
              <NumericDate value={node.frontmatter.publishedDate} />
            </CardMeta>
          </CardHeader>

          <CardTitle>{node.frontmatter.title}</CardTitle>

          <CardContent>
            <MDXRenderer>{node.body}</MDXRenderer>
          </CardContent>
        </Card>
      ))}
    </CardList>
  </Fragment>
)

export const pageQuery = graphql`
  query WritingListPage {
    writing: allMdx(filter: { fileAbsolutePath: { glob: "**/writing/*" } }) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default WritingListPage
