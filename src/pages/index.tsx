/** @jsx jsx */
import { AspectImage } from "@theme-ui/components"
import { graphql } from "gatsby"
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { CardList } from "../components/card"
import { ContentCard } from "../components/content-card"
import { Hero, PageFooter } from "../components/page"
import SEO from "../components/seo"
import { Connection, ContentItem, PageRoot } from "../data/content-type"

const IndexPage: PageRoot<{
  featuredProjects: Connection<ContentItem>
  writingPosts: Connection<ContentItem>
}> = ({ data: { featuredProjects, writingPosts } }) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ bg: "black", color: "white" }}
      title="Working directly with grassroots organisers, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 220} src="/diagram.jpg" />}
    />

    <CardList>
      {featuredProjects.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
      {writingPosts.edges.map(({ node }) => (
        <ContentCard key={node.id} content={node} />
      ))}
    </CardList>

    <PageFooter />
  </Fragment>
)

export const pageQuery = graphql`
  query HomePage {
    featuredProjects: allMdx(
      limit: 8
      sort: { fields: [frontmatter___weight], order: ASC }
      filter: { frontmatter: { weight: { ne: null } } }
    ) {
      edges {
        node {
          ...ContentNodeFragment
        }
      }
    }
    writingPosts: allMdx(
      limit: 6
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
