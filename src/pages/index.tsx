import React from 'react'
import { Link, Box, Container, Flex, Text } from 'rebass'
import Layout from '../components/layout'
import { Heading } from 'rebass'
import styled from 'styled-components'
import * as sys from 'styled-system'

const Columns = styled(Text)`
  @media (min-width: ${props => {
      console.log(props)
      return props.theme.breakpoints[2]
    }}) {
    column-count: 2;
    column-gap: 30px;
  }
`

const IndexPage: React.SFC = () => (
  <Layout>
    <Container pt={[3, 5, 6]} pb={[3, 4, 5]} maxWidth={[500, 800]}>
      <Heading fontSize={[3, 4, 6]} textAlign="center">
        <Link to="/" style={{ textTransform: 'uppercase' }}>
          Common Knowledge
        </Link>
      </Heading>
    </Container>
    <Container pb={[3, 4, 5]} maxWidth={[500, 800]}>
      <Text fontSize={[3, 3, 4]} textAlign="center">
        A tech{' '}
        <Link
          href="https://www.ica.coop/en/cooperatives/what-is-a-cooperative"
          target="_blank"
        >
          cooperative
        </Link>{' '}
        dedicated to building tools and infrastructure for the grassroots left
      </Text>
    </Container>
    <Container maxWidth={[500, 400, 1000]} mb={[3, 5, 7]}>
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
          We believe that modern technology has already demonstrated a route to
          the kind of popular engagement required, albeit one that has not been
          explored adequately.
        </p>
        <p>
          From #Occupy to the Arab Spring to the Corbyn ascendancy, popular
          platforms and tools critical to challenging the ruling class were
          built for and by private companies, for private profit. Their
          political utility has been coincidental.
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
  </Layout>
)

export default IndexPage
