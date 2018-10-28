import React from 'react'
import { Link, Box, Container, Flex, Text } from 'rebass'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import { Heading } from 'rebass'
import styled from 'styled-components'
import { FaWrench } from 'react-icons/fa'

const textWidth = [500, 500, 1000]

const Columns = styled(Text)`
  @media (min-width: ${props => {
      console.log(props)
      return props.theme.breakpoints[1]
    }}) {
    column-count: 2;
    column-gap: 30px;
  }
`

const IndexPage: React.SFC = () => (
  <Layout>
    <Wrapper>
      <Container pt={[4, 5, 6]} pb={[4, 4, 5]} maxWidth={[500, 800]}>
        <Heading fontSize={[3, 4, 6]} textAlign="center">
          <Link to="/" style={{ textTransform: 'uppercase' }}>
            Common Knowledge
          </Link>
        </Heading>
      </Container>
      <Container pb={[4, 4, 5]} maxWidth={[500, 800]}>
        <Text fontSize={[3, 3, 4]} textAlign="center">
          A tech cooperative dedicated to building tools + infrastructure for
          the grassroots left
        </Text>
      </Container>
    </Wrapper>
    <Box py={[4, 5, 6]} bg="blue" color="white">
      <Wrapper>
        <Container maxWidth={textWidth}>
          <Flex
            flexDirection={['column', 'row']}
            alignItems={['start', 'center']}
            css={{ 'line-height': '1em' }}
          >
            <Box>
              <Text fontSize={[3, 5]} pr={[3, 4]} pb={[3, 0]}>
                <FaWrench />
              </Text>
            </Box>
            <Box>
              <Heading fontSize={[3, 3, 4]}>
                We're currently developing a platform for activists and
                organising resources – stay tuned
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Wrapper>
    </Box>
    <Wrapper>
      <Container maxWidth={textWidth} mt={[3, 5]} mb={[3, 5, 7]}>
        <Heading mb={[1, 2]} fontSize={4}>
          What we're about
        </Heading>
        <Columns fontSize={2} textAlign="justify">
          <p>
            Despite the revival of the popular Left in formal politics, the
            prospect of a supportive 'mass movement' has yet to be realised
            through grassroots political activity at scale.
          </p>
          <p>
            A mode of politics that has everyday repercussions and historical
            clout cannot be contained by the traditional structures and
            institutions that have guided the Left so far.
          </p>
          <p>
            Modern technology has already demonstrated a route to the kind of
            popular engagement required, albeit one that has not been explored
            adequately.
          </p>
          <p>
            From #Occupy to the Arab Spring to the Corbyn ascendancy, popular
            social media platforms and tools critical to challenging the ruling
            class were built for and by private companies, for private profit.
            Their political utility has been coincidental.
          </p>
          <p>
            We believe that, through the application of technical and design
            expertise, guided by political principles and solidarity, we can
            together develop a technical infrastructure that is strategically
            beneficial to the movement.
          </p>
          <p>
            Right now, we're developing a toolkit to link up established
            organisers, activists and those newly politicised, and lower the
            barriers to wide-scale political activity.
          </p>
          <p>
            But we have broader ambitions to develop a working concept of how
            pervasive technology can be used by the many, to their material
            benefit, in their daily struggles, and against all forms of
            domination.
          </p>
          <p>
            We want to be self-critical, transparent and strategic in our work.
          </p>
          <p>We'll report back soon.</p>
          <p>
            Say{' '}
            <a href="mailto:hello@commonknowledge.coop">
              hello @ commonknowledge.coop
            </a>
          </p>
        </Columns>
      </Container>
    </Wrapper>
  </Layout>
)

export default IndexPage
