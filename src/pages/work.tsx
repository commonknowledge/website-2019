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

const WorkListPage: PageRoot<{ work: Connection<ContentItem> }> = ({
  data: { work },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <CardList>
      {work.edges.map(({ node }) => (
        <Card key={node.id}>
          <CardHeader>
            <CardMeta>{getContentType(node)}</CardMeta>
            <CardMeta>{node.frontmatter.client}</CardMeta>
            <CardMeta>
              <YearRange value={node.frontmatter} />
            </CardMeta>
            {node.frontmatter.url && (
              <CardMeta>
                <LiteralLink variant="faded" to={node.frontmatter.url} />
              </CardMeta>
            )}
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
