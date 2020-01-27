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
import {
  PageRoot,
  Connection,
  ContentItem,
  getContentType,
} from "../data/content-type"
import { Fragment } from "react"
import SEO from "../components/seo"
import { Hero, PageFooter } from "../components/page"
import { AspectImage } from "@theme-ui/components"
import { YearRange } from "../data/date"
import { LiteralLink } from "../components/nav"

const WorkPage: PageRoot<{ node: ContentItem }> = ({ data: { node } }) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ px: 3, pt: 0, pb: 0, bg: "black", color: "white" }}
      title="Working directly with grassroots activists, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
    />

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

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query WorkPage($id: String!) {
    node: mdx(id: { eq: $id }) {
      ...ContentNodeFragment
    }
  }
`

export default WorkPage
