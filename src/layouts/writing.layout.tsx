/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
} from "../components/card"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  PageRoot,
  ContentItem,
  getContentType,
  ContentNodeFragment,
} from "../data/content-type"
import { NumericDate } from "../data/date"
import { ArticleMeta } from "../components/content-card"

const WritingPage: PageRoot<{ node: ContentItem }> = ({ data: { node } }) => (
  <Card key={node.id}>
    <CardHeader sx={{ pb: [1, null, 3] }}>
      <ArticleMeta content={node} />
    </CardHeader>

    <div
      sx={{
        marginLeft: [null, null, "50%"],
      }}
    >
      <CardTitle
        sx={{
          borderBottom: "1px solid black",
          borderBottomColor: "accent",
          lineHeight: "100%",
          pb: 3,
          mb: 3,
        }}
      >
        {node.frontmatter.title}
      </CardTitle>

      <CardContent sx={{ h2: { mt: 4, mb: 3 }, p: { mb: 3 } }}>
        <MDXRenderer>{node.body}</MDXRenderer>
      </CardContent>
    </div>
  </Card>
)

export const pageQuery = graphql`
  query WritingPage($id: String!) {
    node: mdx(id: { eq: $id }) {
      ...ContentNodeFragment
    }
  }
`

export default WritingPage
