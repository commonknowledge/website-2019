/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import { Link, LiteralLink } from "../components/nav"
import { graphql } from "gatsby"
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
  CardList,
} from "../components/card"
import { FC, Fragment } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Hero } from "../components/page"
import { AspectImage } from "@theme-ui/components"
import {
  Connection,
  ContentItem,
  PageRoot,
  getContentType,
  ContentNodeFragment,
} from "../data/content-type"
import { YearRange } from "../data/date"

const IndexPage: PageRoot<{ work: Connection<ContentItem> }> = ({
  data: { work },
}) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ px: 3, pt: 0, pb: 0, bg: "black", color: "white" }}
      title="Working directly with grassroots activists, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
    />

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
  query HomePage {
    work: allMdx(filter: { fileAbsolutePath: { glob: "**/work/*" } }) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default IndexPage
