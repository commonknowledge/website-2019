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

const WritingPage: PageRoot<{ node: ContentItem }> = ({ data: { node } }) => (
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
)

export const pageQuery = graphql`
  query WritingPage($id: String!) {
    node: mdx(id: { eq: $id }) {
      ...ContentNodeFragment
    }
  }
`

export default WritingPage
