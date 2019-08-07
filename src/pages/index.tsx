/** @jsx jsx */
import { jsx, Box, Flex, Styled, Layout } from 'theme-ui';
import SEO from "../components/seo"
import { Link } from "../components/nav"
import { Theme } from "../components/theme"
import "@csstools/normalize.css"

const padding = [3, 4, 5]
const minorColumnWidth = ["48%", "38.196601125%"]

const IndexPage = () => (
  <Theme>
    <SEO title="Common Knowledge" />
    <Layout sx={{ maxWidth: 1600 }}>
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
          fontFamily: "brand",
        }}
      >
        <Box
          sx={{
            position: ["relative", "fixed"],
            top: [undefined, 0],
            left: [undefined, 0],
            width: ["100%", ...minorColumnWidth],
          }}
        >
          <Styled.h1
            sx={{
              m: 0,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: [5, 5, 6],
              padding,
              paddingBottom: [2, 2, 3],
            }}
          >
            <div>Common</div>
            <div sx={{ lineHeight: 0.5 }}>Knowledge</div>
          </Styled.h1>
        </Box>
        <Box
          sx={{
            fontWeight: 500,
            fontSize: [5, 5, 6],
            ml: [0, ...minorColumnWidth],
            pt: padding,
            px: padding,
            pb: 0,
            // color: ['muted', 'text']
          }}
        >
          <span>A nonprofit workers cooperative</span> <span sx={{ color: 'secondary' }}>building digital tools for the grassroots</span>
        </Box>
      </Flex>
      <Box sx={{ ml: [0, ...minorColumnWidth], pl: padding, pr: padding, pb: padding, pt: 0 }}>
        <Styled.h3
          sx={{ fontWeight: "bold", mt: [5, 5, 6], mb: [1, 2], color: "muted" }}
        >
          What we do
        </Styled.h3>
        <Styled.p>
          In an increasingly digital world, thoughtfully designed technology can help facilitate everyday autonomy and large-scale collective action. We work in three complementary spheres.
        </Styled.p>
        {/*  */}
        <Box>
          <Flex sx={{ alignItems: "baseline" }}>
            <Box sx={{ width: 50 }}>
              <Styled.h3 sx={number}>01.</Styled.h3>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Styled.h3>
                Building digital tools and infrastructure
              </Styled.h3>
              <Styled.p>Co-designing software that lowers barriers to activism and self-organisation.</Styled.p>
            </Box>
          </Flex>
          <Flex sx={{ alignItems: "baseline" }}>
            <Box sx={{ width: 50 }}>
              <Styled.h3 sx={number}>02.</Styled.h3>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Styled.h3>
                Growing the technical capacity of the movement
              </Styled.h3>
              <Styled.p>Coordinating fellow technical activists and projects across the ecosystem and encouraging good engineering and design practice.</Styled.p>
            </Box>
          </Flex>
          <Flex sx={{ alignItems: "baseline" }}>
            <Box sx={{ width: 50 }}>
              <Styled.h3 sx={number}>03.</Styled.h3>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Styled.h3>
                Encouraging platform organising across the movement
              </Styled.h3>
              <Styled.p>Recognising that infrastructure is a composition of people, tools and structures, we faciliate movement activists and organisations to reflect on their transferable skills and shared challenges, so we can organise at ever-larger scales.</Styled.p>
            </Box>
          </Flex>
        </Box>
        {/*  */}
        <Styled.h3
          sx={{ fontWeight: "bold", mt: [5, 5, 6], mb: [1, 2], color: "muted" }}
        >
          What we're working on
        </Styled.h3>
        <Styled.h3>Movement App</Styled.h3>
        <Styled.p>Prototyping a digital platform to help people get involved in grassroots activism when they aren't sure where to start.</Styled.p>
        <Styled.h3>
          Autonomous reading group organising // <Link to='https://www.leftbookclub.com/'>Left Book Club</Link>
        </Styled.h3>
        <Styled.p>Prototyping an autonomous reading group organising platform, co-designed with Pluto Press.</Styled.p>
        <Styled.h3>Organising At Scale // <Link to='http://www.antiuniversity.org/'>Antiuniversity</Link></Styled.h3>
        <Styled.p>Reviving the idea of the old London Underground monthly meetings and co-organising activist assemblies, workshops and meetups to spread knowledge and collectively solve organising problems.</Styled.p>
      </Box>
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
          fontSize: [3, 2, 2, 3]
        }}
      >
        <div>Want to work with us?</div>
        <Link to="mailto:hello@commonknowledge.coop" sx={{ border: 'none', color: 'secondary' }}>hello@commonknowledge.coop</Link>
        <Flex sx={{ mt: [4] }}>
          <Link sx={{ mr: 2 }} to="http://twitter.com/cmmonknowledge">Twitter</Link>
          <Link sx={{ mr: 2 }} to="http://github.com/commonknowledge">GitHub</Link>
          <Link sx={{ mr: 2 }} to="https://opencollective.com/commonknowledge/donate">Donate</Link>
        </Flex>
      </Box>
    </Layout>
  </Theme>
)

const number = { m: 0, color: 'secondary' }

export default IndexPage
