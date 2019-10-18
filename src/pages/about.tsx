/** @jsx jsx */
import { jsx, Box, Flex, Styled, Layout } from 'theme-ui';
import SEO from "../components/seo"
import { Link } from "../components/nav"
import { Theme } from "../components/theme"
import "@csstools/normalize.css"
import { Link as GatsbyLink } from 'gatsby';

const padding = [3, 4, 5]
const minorColumnWidth = ["48%", "38.196601125%"]

const IndexPage = () => (
    <Theme>
        <SEO title="Our vision, mission and values - Common Knowledge" />
        <Layout sx={{ maxWidth: 1600 }}>
            <Flex
                sx={{
                    flexDirection: ["column", "column", "row"],
                }}
            >
                <Box
                    sx={{
                        position: ["relative", "fixed"],
                        top: [undefined, 0],
                        left: [undefined, 0],
                        width: ["100%", ...minorColumnWidth],
                        fontFamily: "brand",
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
                        <GatsbyLink to='/' sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <div>Common</div>
                            <div sx={{ lineHeight: 0.5 }}>Knowledge</div>
                        </GatsbyLink>
                    </Styled.h1>
                </Box>
                <Box sx={{ ml: [0, ...minorColumnWidth], pl: padding, pr: padding, pb: padding, pt: 0 }}>
                    <Styled.h3 sx={{ fontWeight: "bold", mt: [5, 5, 5], mb: [1, 2], color: "muted" }}>
                        Vision
            </Styled.h3>
                    <Styled.p sx={{ fontSize: [4] }}>We envision a world of abundance, free from oppression.</Styled.p>
                    <Styled.p sx={{ fontSize: [4] }}>To get there, we need people who are confident in their capacity to self-organise, empowered by digital technology.</Styled.p>
                    {/*  */}
                    <Styled.h3 sx={{ fontWeight: "bold", mt: [5, 5, 5], mb: [1, 2], color: "muted" }}>
                        Mission
            </Styled.h3>
                    <Styled.p sx={{ fontSize: [4] }}>Working directly with grassroots activists, we design digital tools that make radical change possible.</Styled.p>
                    {/*  */}
                    <Styled.h3 sx={{ fontWeight: "bold", mt: [5, 5, 5], mb: [1, 2], color: "muted" }}>
                        Values
            </Styled.h3>
                    <Flex sx={{ flexWrap: 'wrap' }}>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Agency</Styled.h3>
                            <Styled.p>Common Knowledge seeks to empower people to change their own lives through self-organisation. We trust that people can.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Solidarity</Styled.h3>
                            <Styled.p>Common Knowledge acts in solidarity with those who are struggling against all forms of oppression. Solidarity is power. Diversity is strength.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Pragmatism</Styled.h3>
                            <Styled.p>Common Knowledge is active and practical in approach. We use theory and practice to intensify each other.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Thoughtfulness</Styled.h3>
                            <Styled.p>Common Knowledge acts thoughtfully, listens carefully and learns. We build tools and structures for ourselves and others as we go.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Interdependence</Styled.h3>
                            <Styled.p>Common Knowledge acts with generosity and compassion. We are part of a wider ecosystem and rely upon other people, their communities and the natural world.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Openness</Styled.h3>
                            <Styled.p>Common Knowledge practices openness, between ourselves and with others. Open, unfinished work invites collaboration and iteration. We want to show others how to do what we do and keep ourselves accountable.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Optimism</Styled.h3>
                            <Styled.p>Common Knowledge is optimistic about the power of people to collectively overcome oppression and build a better future.</Styled.p>
                        </Box>
                        <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                            <Styled.h3>Cooperation</Styled.h3>
                            <Styled.p>As a not-for-profit workers cooperative, we also adhere to the cooperative values of self-help, self-responsibility, democracy, equality, equity and solidarity.</Styled.p>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
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
                <Link to="mailto:hello@commonknowledge.coop" sx={{ border: 'none', color: 'accent' }}>hello@commonknowledge.coop</Link>
                <Flex sx={{ mt: [4] }}>
                    <Link sx={{ mr: 2 }} to="http://twitter.com/cmmonknowledge">Twitter</Link>
                    <Link sx={{ mr: 2 }} to="http://github.com/commonknowledge">GitHub</Link>
                    <Link sx={{ mr: 2 }} to="https://opencollective.com/commonknowledge/donate">Donate</Link>
                </Flex>
            </Box>
        </Layout>
    </Theme >
)

const number = { m: 0, color: 'accent' }

export default IndexPage
