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
import {
  Card,
  CardHeader,
  CardMeta,
  CardTitle,
  CardContent,
} from "../components/card"

const padding = [3, 4, 5]
const minorColumnWidth = ["48%", "38.196601125%"]

const IndexPage = () => (
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

    <Card>
      <CardHeader>
        <CardMeta>Project</CardMeta>
        <CardMeta>Momentum</CardMeta>
        <CardMeta>2019–Ongoing</CardMeta>
        <CardMeta>mycampaignmap.com</CardMeta>
      </CardHeader>

      <CardTitle>My Campaign Map</CardTitle>

      <CardContent>
        Part of Momentum’s digital infrastructure for the 2019 General Election,
        My Campaign Map helps you find out where and how you can help build our
        movement. Working directly with grassroots activists, we design digital
        tools that make radical change possible.
      </CardContent>
    </Card>

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
      <div>Want to work with us?</div>
      <Link
        to="mailto:hello@commonknowledge.coop"
        sx={{ border: "none", color: "accent" }}
      >
        hello@commonknowledge.coop
      </Link>
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

const number = { m: 0, color: "accent" }
export default IndexPage
