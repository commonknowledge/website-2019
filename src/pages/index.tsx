import React from 'react'
import { Heading, Box, Flex, Text } from 'rebass'
import { InternalLink, ExternalLink } from '../components/link'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import Container from '../components/container'

import { FaWrench, FaEye, FaTwitter } from 'react-icons/fa'

const textWidth = [500, 500, 700]

interface TextBlockProps {
  icon?: any
  text: any
  alternate?: boolean
}

const TextBlock: React.SFC<TextBlockProps> = ({ icon, text, alternate }) => {
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
        {...{
          [alternate ? 'pr' : 'pl']: [0, 0, 5],
        }}
      >
        {icon}
      </Text>
    </Box>
  )

  return (
    <Flex
      mb={[2, 3, 5]}
      flexDirection={['column', 'column', alternate ? 'row' : 'row-reverse']}
    >
      {_image}
      {_text}
    </Flex>
  )
}

const IndexPage: React.SFC = () => (
  <Layout px={[3, 4, 5]}>
    <Wrapper pt={[4, 5, 6]} pb={[4, 4, 5]}>
      <Container pb={[3, 3, 4]} maxWidth={[500, 800]}>
        <Heading fontSize={[3, 4, 6]} textAlign="center">
          <InternalLink to="/" css={{ 'text-transform': 'uppercase' }}>
            Common Knowledge
          </InternalLink>
        </Heading>
      </Container>
      <Text
        pb={[3, 3, 4]}
        fontSize={[2, 2, 3]}
        textAlign="center"
        css={{ opacity: 0.5 }}
      >
        (A tech coop)
      </Text>
      <Container maxWidth={[500, 800]}>
        <Text fontSize={[3, 3, 4]} textAlign="center">
          Designing tools + infrastructure to grow the grassroots left
        </Text>
      </Container>
    </Wrapper>
    {/* <Box py={[4, 5, 6]} bg="black" color="white">
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
    </Box> */}
    <Wrapper>
      <Container maxWidth={textWidth} mt={[4, 5]} mb={[3, 5, 6]}>
        {/* <Heading mb={[3, 4, 5]} fontSize={[3, 3, 4]}>
          What we're about
        </Heading> */}
        {/* <TextBlock
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
                In hindsight, it was naïve to believe that such a movement would
                naturally arise out of the traditional institutions of the left.
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
                Modern technology has shown us a route to the kind of popular
                political engagement we'd need to make radical change.
              </p>
              <p>
                From #Occupy to the Arab Spring to the Corbyn ascendancy,
                popular social media platforms and technology was critical to
                organising challenges to ruling class power.
              </p>
              <p>
                But these tools were built by and for private profit; their
                political utility has been coincidental. We've only scraped the
                surface of what could be done by and for those who fight to
                change society.
              </p>
              <p>
                And the rapid rise of the hyper-exploitative gig economy, global
                logistics and big data companies show us what happens when a
                technology like the internet is monopolised by business.
              </p>
            </>
          }
        />
        <TextBlock
          icon={<FaWrench />}
          text={
            <>
              <p>
                We believe the skills, methodologies and technologies of the
                tech industry can be re-appropriated for the intersectional
                socialist movement.
              </p>
              <p>
                Grounded in the principles of collaborative research, design,
                implementation, ownership and control, a democratic technical
                infrastructure that is strategically useful can be built out.
              </p>
            </>
          }
        /> */}
        <TextBlock
          alternate
          icon={<FaEye />}
          text={
            <>
              <p>
                Right now, we're developing a toolkit to link up established
                organisers, activists and those newly politicised, and lower the
                barriers to wide-scale political activity.
              </p>
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
                <ExternalLink href="mailto:hello@commonknowledge.coop">
                  hello @ commonknowledge.coop
                </ExternalLink>
              </p>
            </>
          }
        />
      </Container>
    </Wrapper>
  </Layout>
)

export default IndexPage
