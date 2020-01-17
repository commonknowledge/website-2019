/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Flex, Styled, Layout } from "theme-ui"

import SEO from "../components/seo"
import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { PageHeader, Hero } from "../components/page"
import { Link } from "../components/nav"
import "@csstools/normalize.css"
import { BackgroundImage } from "../components/atoms"
import { graphql } from "gatsby"
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
  CardList,
} from "../components/card"
import { FC } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const padding = [3, 4, 5]
const minorColumnWidth = ["48%", "38.196601125%"]

const IndexPage: FC<any> = ({ data: { work } }) => (
  <Theme>
    <SEO title="Common Knowledge" />

    <PageHeader sx={{ color: "white", bg: "black" }}>
      <Hero
        sx={{ px: 3, pt: 0, pb: 0 }}
        title="Working directly with grassroots activists, we design digital tools that make radical change possible."
        image={
          <BackgroundImage
            sx={{
              height: 150,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              m: 0,
              mt: 2,
              backgroundPositionY: "bottom",
              backgroundPositionX: "center",
            }}
            src="/diagram.png"
          />
        }
      />
    </PageHeader>

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

    <div sx={{ m: 4, fontWeight: 500, fontSize: "18px" }}>
      <div>Interested in working with us?</div>
      <Link
        to="mailto:hello@commonknowledge.coop"
        sx={{ border: "none", color: "accent" }}
      >
        hello@commonknowledge.coop
      </Link>
    </div>

    <Box
      sx={{
        mt: 4,
        position: ["relative", "fixed"],
        bottom: 0,
        left: 0,
        padding,
        pr: 0,
        // pb: [5],
        width: ["100%", ...minorColumnWidth],
        fontWeight: 600,
        fontSize: [3, 2, 2, 3],
      }}
    >
      <Flex sx={{ mt: [4] }}>
        <Link sx={{ mr: 2 }} to="http://twitter.com/cmmonknowledge">
          Twitter
        </Link>
        <Link sx={{ mr: 2 }} to="http://github.com/commonknowledge">
          GitHub
        </Link>
        <Link
          sx={{ mr: 2 }}
          to="https://opencollective.com/commonknowledge/donate"
        >
          Donate
        </Link>
      </Flex>
    </Box>
  </Theme>
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

const number = { m: 0, color: "accent" }

export default IndexPage
