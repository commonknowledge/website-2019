/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, CardHeader, CardTitle, CardContent } from "../components/card"
import { graphql } from "gatsby"
import { Fragment } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PageRoot, ContentItem } from "../data/content-type"
import { ArticleMeta } from "../components/content-card"
import { PageFooter, ArticleContent } from "../components/page"

const WritingPage: PageRoot<{ node: ContentItem }> = ({ data: { node } }) => (
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

        <CardContent sx={{ h2: { mt: 4, mb: 3 }, p: { mb: 3 } }}>
          <ArticleContent>
            <MDXRenderer>{node.body}</MDXRenderer>
          </ArticleContent>
        </CardContent>
      </ArticleContent>
    </Card>
    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query WritingPage($id: String!) {
    node: mdx(id: { eq: $id }) {
      ...ContentNodeFragment
    }
  }
`

export default WritingPage
