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
import { Hero, PageFooter } from "../components/page"
import { AspectImage } from "@theme-ui/components"
import {
  Connection,
  ContentItem,
  PageRoot,
  getContentType,
} from "../data/content-type"
import { YearRange } from "../data/date"
import { ContentCard } from "../components/content-card"

const IndexPage: PageRoot<{
  featured: Connection<ContentItem>
  historical: Connection<ContentItem>
}> = ({ data: { featured, historical } }) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ bg: "black", color: "white" }}
      title="Working directly with grassroots organisers, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 220} src="/diagram.jpg" />}
    />

    <CardList>
      {featured.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
      {historical.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
    </CardList>

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query HomePage {
    featured: allMdx(
      sort: { fields: [frontmatter___weight], order: ASC }
      filter: { frontmatter: { weight: { ne: null } } }
    ) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
    historical: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { weight: { eq: null } } }
    ) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
  }
`

export default IndexPage
