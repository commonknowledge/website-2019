/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui';
import SEO from "../components/seo"
import "@csstools/normalize.css"
import GridLayout from '../components/layout';
import { Fragment } from 'react';

const IndexPage = () => (
    <Fragment>
        <SEO title="Our vision, mission and values - Common Knowledge" />
        <GridLayout>
            <Styled.h3 sx={{ fontWeight: "bold", mt: [5, 5, 5], mb: [1, 2], color: "muted" }}>
                Vision
            </Styled.h3>
            <Styled.p sx={{ fontSize: [4] }}>A world of abundance, free from oppression.</Styled.p>
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
        </GridLayout>
    </Fragment>
)

export default IndexPage