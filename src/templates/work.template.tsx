/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
} from "../components/card"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const WorkPage = ({
  data: {
    page: { id, frontmatter, body },
  },
}) => (
  <Card key={id}>
    <CardHeader>
      <CardMeta>{frontmatter.type}</CardMeta>
      <CardMeta>{frontmatter.client}</CardMeta>
      <CardMeta>{frontmatter.dates}</CardMeta>
      <CardMeta>
        <Link sx={{ variant: "link.faded" }} to={frontmatter.location}>
          {frontmatter.location.replace(/^.*:\/\//, "")}
        </Link>
      </CardMeta>
    </CardHeader>

    <CardTitle>{frontmatter.name}</CardTitle>

    <CardContent>
      <MDXRenderer>{body}</MDXRenderer>
    </CardContent>
  </Card>
)

export const pageQuery = graphql`
  query WorkPage($id: String!) {
    page: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        type
        client
        dates
        location
      }
    }
  }
`

export default WorkPage
