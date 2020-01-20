/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import { Link } from "../components/nav"
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

const IndexPage: FC<any> = ({ data: { work } }) => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Hero
      sx={{ px: 3, pt: 0, pb: 0, bg: "black", color: "white" }}
      title="Working directly with grassroots activists, we design digital tools that make radical change possible."
      image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
    />

    <CardList>
      {work.edges.map(({ node: { id, frontmatter, body } }) => (
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
      ))}
    </CardList>
  </Fragment>
)

export const pageQuery = graphql`
  query HomePage {
    work: allMdx(filter: { fileAbsolutePath: { glob: "**/work/*" } }) {
      edges {
        node {
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
    }
  }
`

export default IndexPage
