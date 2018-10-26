import React from 'react'
import { Link, Box, Flex, Text } from 'rebass'
import Layout from '../components/Layout'
import { Heading } from 'rebass'

const IndexPage: React.SFC = () => (
  <Layout>
    <Box style={{ 'max-width': 500 }} mb={[3, 5, 7]} mx="auto">
      <Box pt={[3, 5, 6]} pb={[3, 4, 5]}>
        <Flex>
          <Heading fontSize={[3, 4, 5]}>
            <Link to="/" style={{ 'text-transform': 'uppercase' }}>
              Common Knowledge
            </Link>
          </Heading>
        </Flex>
      </Box>
      <Text fontSize={[3, 3, 4]} mb={4}>
        A tech{' '}
        <Link
          href="https://www.ica.coop/en/cooperatives/what-is-a-cooperative"
          target="_blank"
        >
          cooperative
        </Link>{' '}
        dedicated to building tools and infrastructure for the grassroots left
      </Text>
      <Text fontSize={2} textAlign="justify">
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
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
