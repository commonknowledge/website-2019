/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardList,
} from "../components/card"
import { graphql } from "gatsby"
import { Fragment } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PageRoot, ContentItem, Connection } from "../data/content-type"
import {
  ArticleMeta,
  ContentCard,
  WritingCard,
} from "../components/content-card"
import { PageFooter, ArticleContent } from "../components/page"

const WritingPage: PageRoot<{
  node: ContentItem
  readNext: Connection<ContentItem>
}> = ({ data: { node, readNext } }) => (
  <Fragment>
    <Card key={node.id}>
      <CardHeader sx={{ pb: [1, null, 3] }}>
        <ArticleMeta content={node} />
      </CardHeader>

      <ArticleContent
        sx={{
          marginLeft: [null, null, "50%"],
        }}
      >
        <CardTitle
          sx={{
            lineHeight: "100%",
            mb: 3,
          }}
        >
          {node.frontmatter.title}
        </CardTitle>

        <hr
          sx={{
            my: 4,
            height: 1,
            backgroundColor: theme => theme.colors.accent,
            border: "none",
          }}
        />

        <CardContent>
          <ArticleContent>
            <MDXRenderer>{node.body}</MDXRenderer>
          </ArticleContent>
        </CardContent>
      </ArticleContent>
    </Card>

    <hr
      sx={{
        m: 4,
        height: 1,
        backgroundColor: theme => theme.colors.accent,
        border: "none",
      }}
    />

    <div
      sx={{
        marginLeft: [null, null, "50%"],
      }}
    >
      <h3
        sx={{
          m: 4,
          mb: [3, null, 4],
          fontSize: 18,
          fontWeight: 600,
          position: [null, null, "absolute"],
          left: 0,
        }}
      >
        Read next
      </h3>

      <CardList sx={{ mt: -3, ml: [null, null, -4] }}>
        {readNext.edges.map(
          ({ node: readNextNode }) =>
            node.id !== readNextNode.id && (
              <WritingCard
                compact
                key={readNextNode.id}
                content={readNextNode}
              />
            )
        )}
      </CardList>
    </div>

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query WritingPage($id: String!) {
    node: mdx(id: { eq: $id }) {
      ...ContentNodeFragment
    }
    readNext: allMdx(
      filter: { fileAbsolutePath: { glob: "**/writing/*" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default WritingPage
