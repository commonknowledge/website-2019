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
            <Styled.h3 sx={{ fontWeight: "bold", mt: [5], mb: [1, 2] }}>
                Vision
            </Styled.h3>
            <Styled.p sx={{}}>A world of abundance, free from oppression.</Styled.p>
            <Styled.p sx={{}}>To get there, we need people who are confident in their capacity to self-organise, empowered by digital technology.</Styled.p>
            {/*  */}
            <Styled.h3 sx={{ fontWeight: "bold", mt: [4], mb: [1, 2] }}>
                Mission
            </Styled.h3>
            <Styled.p sx={{}}>Working directly with grassroots activists, we design digital tools that make radical change possible.</Styled.p>
            {/*  */}
            <Styled.h3 sx={{ fontWeight: "bold", mt: [4], mb: [1, 2] }}>
                Values
            </Styled.h3>
            <Flex sx={{ flexWrap: 'wrap' }}>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Agency</Styled.h4>
                    <Styled.p>Common Knowledge seeks to empower people to change their own lives through self-organisation. We trust that people can.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Solidarity</Styled.h4>
                    <Styled.p>Common Knowledge acts in solidarity with those who are struggling against all forms of oppression. Solidarity is power. Diversity is strength.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Pragmatism</Styled.h4>
                    <Styled.p>Common Knowledge is active and practical in approach. We use theory and practice to intensify each other.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Thoughtfulness</Styled.h4>
                    <Styled.p>Common Knowledge acts thoughtfully, listens carefully and learns. We build tools and structures for ourselves and others as we go.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Interdependence</Styled.h4>
                    <Styled.p>Common Knowledge acts with generosity and compassion. We are part of a wider ecosystem and rely upon other people, their communities and the natural world.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Openness</Styled.h4>
                    <Styled.p>Common Knowledge practices openness, between ourselves and with others. Open, unfinished work invites collaboration and iteration. We want to show others how to do what we do and keep ourselves accountable.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Optimism</Styled.h4>
                    <Styled.p>Common Knowledge is optimistic about the power of people to collectively overcome oppression and build a better future.</Styled.p>
                </Box>
                <Box sx={{ width: ['100%', '50%'], pr: [0, 5] }}>
                    <Styled.h4>Cooperation</Styled.h4>
                    <Styled.p>As a not-for-profit workers cooperative, we also adhere to the cooperative values of self-help, self-responsibility, democracy, equality, equity and solidarity.</Styled.p>
                </Box>
            </Flex>
        </GridLayout>
    </Fragment>
)

export default IndexPage