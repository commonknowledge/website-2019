/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Box, AspectImage } from "@theme-ui/components"

import SEO from "../components/seo"
import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { PageHeader, Hero, FooterBlock } from "../components/page"
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
import { CoOpsLogo, CoTechLogo } from "../components/graphics"

const padding = [3, 4, 5]
const minorColumnWidth = ["48%", "38.196601125%"]

const IndexPage: FC<any> = ({ data: { work } }) => (
  <Theme>
    <SEO title="Common Knowledge" />

    <PageHeader sx={{ color: "white", bg: "black" }}>
      <Hero
        sx={{ px: 3, pt: 0, pb: 0 }}
        title="Working directly with grassroots activists, we design digital tools that make radical change possible."
        image={<AspectImage ratio={480 / 217} src="/diagram.png" />}
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

    <Grid as="footer" gap={5} sx={{ m: 4 }}>
      <div sx={{ fontWeight: 500, fontSize: "18px" }}>
        <div>Interested in working with us?</div>
        <Link variant="accent" to="mailto:hello@commonknowledge.coop">
          hello@commonknowledge.coop
        </Link>
      </div>

      <Grid gap={4} columns={2}>
        <FooterBlock title="Visit">
          Space4
          <br />
          113 Fonthill Road
          <br />
          London, N4 3HH
        </FooterBlock>

        <FooterBlock title="Contact">
          {/* <Link>Book a meeting</Link>
          <Link>PGP Key</Link> */}
        </FooterBlock>

        <FooterBlock title="Elsewhere">
          <Link to="http://twitter.com/cmmonknowledge">Twitter</Link>
          <Link to="http://github.com/commonknowledge">Github</Link>
          {/* <Link>Git.coop</Link> */}
        </FooterBlock>

        <FooterBlock title="Support our work">
          <Link to="https://opencollective.com/commonknowledge/donate">
            Open Collective
          </Link>
          {/* <Link>Coinbase</Link> */}
        </FooterBlock>
      </Grid>

      <Grid gap={4}>
        <Grid gap={1}>
          <FooterBlock>Company no. 11620742</FooterBlock>
          <FooterBlock>Registered in England and Wales</FooterBlock>
        </Grid>

        <Grid gap={1}>
          <FooterBlock>Privacy Policy</FooterBlock>
          <FooterBlock>Manage Cookies</FooterBlock>
        </Grid>

        <Grid columns={2}>
          <CoOpsLogo />
          <CoTechLogo />
        </Grid>
      </Grid>
    </Grid>
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

export default IndexPage
