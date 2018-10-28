import React from 'react'
import { Link, Box, Container, Flex, Text } from 'rebass'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import { Heading } from 'rebass'

import { FaWrench, FaEye, FaTwitter } from 'react-icons/fa'

const textWidth = [500, 500, 700]

interface TextBlockProps {
  icon?: any
  text: any
  alternate?: boolean
}

const TextBlock: React.SFC<TextBlockProps> = ({ icon, text, alternate }) => {
  const padding = {
    [alternate ? 'pr' : 'pl']: [0, 0, 5],
  }

  const _text = (
    <Container width={[1, 1, 0.6]} maxWidth={500} px={0} mx={0} fontSize={2}>
      <Text textAlign="justify">{text}</Text>
    </Container>
  )

  const _image = (
    <Box width={[1, 1, 0.4]}>
      <Text
        fontSize={[3, 4]}
        textAlign={alternate && ['left', 'left', 'right']}
        {...padding}
      >
        {icon}
      </Text>
    </Box>
  )

  return (
    <Flex
      mb={[2, 3, 5]}
      flexDirection={['column', 'column', alternate ? 'row-reverse' : 'row']}
    >
      {_text}
      {_image}
    </Flex>
  )
}

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
        <TextBlock
          text={
            <>
              <p>
                The revival of the popular Left in formal politics has been an
                exciting and direly necessary development.
              </p>
              <p>
                But the prospect of a supportive 'mass movement' has yet to be
                realised through grassroots political activity at scale.
              </p>
              <p>
                In hindsight, it seems naive to think that such a movement would
                naturally arise out of the existing institutions of the left.
              </p>
            </>
          }
        />
        <TextBlock
          alternate
          icon={<FaTwitter />}
          text={
            <>
              <p>
                But modern technology has demonstrated a route to the kind of
                popular engagement we all seek, albeit a route that has not been
                explored adequately.
              </p>
              <p>
                From #Occupy to the Arab Spring to the Corbyn ascendancy,
                popular social media platforms and tools critical to challenging
                the ruling class were built for and by private companies, for
                private profit. Their political utility has been coincidental.
              </p>
            </>
          }
        />
        <TextBlock
          icon={<FaWrench />}
          text={
            <>
              <p>
                We believe that, through the application of technical and design
                expertise, guided by political principles and solidarity, we can
                together develop a technical infrastructure that is
                strategically beneficial to the movement.
              </p>
              <p>
                Right now, we're developing a toolkit to link up established
                organisers, activists and those newly politicised, and lower the
                barriers to wide-scale political activity.
              </p>
            </>
          }
        />
        <TextBlock
          alternate
          icon={<FaEye />}
          text={
            <>
              <p>
                But we have broader ambitions to develop a working concept of
                how pervasive technology can be used by the many, to their
                material benefit, in their daily struggles, and against all
                forms of domination.
              </p>
              <p>
                We want to be self-critical, transparent and strategic in our
                work.
              </p>
              <p>We'll report back soon.</p>
              <p>
                Say{' '}
                <a href="mailto:hello@commonknowledge.coop">
                  hello @ commonknowledge.coop
                </a>
              </p>
            </>
          }
        />
      </Container>
    </Wrapper>
  </Layout>
)

export default IndexPage
