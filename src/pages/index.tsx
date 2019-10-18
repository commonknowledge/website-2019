/** @jsx jsx */
import { jsx, Box, Flex, Styled, Layout } from 'theme-ui';
import SEO from "../components/seo"
import { Link } from "../components/nav"
import GridLayout from '../components/layout';
import { Fragment } from 'react';

const number = { m: 0, color: 'accent' }

const IndexPage = () => (
  <Fragment>
    <SEO title="Common Knowledge" />
    <GridLayout
      heading={
        <Box
          sx={{
            fontWeight: 500,
            fontSize: [5, 5, 6],
            fontFamily: "brand",
          }}
        >
          <span>A nonprofit workers cooperative</span> <span sx={{ color: 'accent' }}>building digital tools for the grassroots</span>
        </Box>
      }>
      <Styled.h3
        sx={{ fontWeight: "bold", mt: [5, 5, 6], mb: [1, 2], color: "muted" }}
      >
        What we do
    </Styled.h3>
      <Styled.p>
        In an increasingly digital world, thoughtfully designed technology can facilitate everyday autonomy and large-scale collective action. We work in three complementary spheres.
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
    </GridLayout>
  </Fragment>
)

export default IndexPage
