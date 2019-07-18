import React from 'react'
import { Heading, Box, Flex, Text } from '../utils/rebass'
import { InternalLink } from '../components/link'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import Container from '../components/container'
// @ts-ignore
import logo from '../images/movement-logo.svg'
import { FaEnvelope, FaDiscord } from 'react-icons/fa'
import FundingPanel from '../components/FundingPanel'
import { Link } from 'gatsby'
import theme from '../styles/theme'
import { subtitleFontFamily } from '../styles/typography'
import SocialLinks from '../components/SocialLinks'

const IndexPage: React.SFC = () => (
  <Layout>
    <Wrapper pt={[5, 5, 6]} pb={[5, 5, 6]}>
      <Heading fontSize={[5, 6, 7]}>
        <InternalLink to="/" style={{ textTransform: 'uppercase' }}>
          Common Knowledge
        </InternalLink>
      </Heading>
      <Text
        py={[2, 2, 3]}
        fontSize={[3, 3, 4]}
        lineHeight={'1em'}
        css={{ opacity: 0.25 }}
        fontFamily={subtitleFontFamily.name}
      >
        (A not-for-profit workers cooperative)
      </Text>
      <Text fontSize={[4, 4, 5]} fontFamily={subtitleFontFamily.name}>
        Activists and software developers designing platform-level tools to grow
        the grassroots
      </Text>
    </Wrapper>
    <Container py={[4, 5, 6]} css={{ background: theme.colors.red }}>
      <Wrapper>
        <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
          <Box width={[1, 1, 0.5]}>
            <Heading
              css={{ color: 'white' }}
              fontSize={[5, 5, 5]}
              fontWeight={900}
              lineHeight={1}
            >
              <i>Movement</i> — the prototype platform for activism
            </Heading>
            <Text fontSize={1} css={{ color: 'white' }} mt={3}>
              We're building a platform for people to get involved in grassroots
              activism when they aren't sure where to start. <i>Movement</i>{' '}
              helps you put your principles into practice, learn new skills and
              spend time with locals who share your concerns 🙌.
            </Text>
          </Box>
          <Flex
            mb={[4, 4, 0]}
            width={[1, 1, 0.5]}
            flexDirection="column"
            justifyContent="center"
            alignItems="middle"
          >
            <div style={{ padding: '20px 20px', textAlign: 'center' }}>
              <img src={logo} style={{ width: '30%', margin: 0 }} />
            </div>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
    <Wrapper>
      <Container mt={[4, 5]}>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Container width={[1, 1, 0.5]} px={0} mx={0}>
            <Heading
              // width={[1, 1, 0.75]}
              // ml="auto"
              fontSize={[6, 6, 6]}
              textAlign={['left']}
              // pr={[0, 0, 5]}
            >
              What we're about
            </Heading>
            <Text fontSize={1}>
              <p>
                Right now we're developing a toolkit to link up established
                organisers, activists and those newly politicised and lower the
                barriers to wide-scale political activity.
              </p>
              <p>
                But our broader ambition is to explore how pervasive technology
                can be used by the many to our material benefit, in our daily
                struggles and against all forms of domination.
              </p>
              <p>
                We want to be self-critical, transparent and strategic in our
                work.
              </p>
              <p>
                Check back soon when we'll start publishing regular reports.
              </p>
            </Text>
          </Container>
        </Flex>
        <Flex flexDirection={['column', 'row']} justifyContent={'space-around'}>
          <Box my={[3, 3, 4]}>
            <Text textAlign="center">
              <a
                style={{
                  margin: 10,
                  display: 'inline-block',
                  fontSize: 32,
                  borderRadius: 100,
                  background: 'white',
                  color: theme.colors.red,
                  padding: '10px 30px',
                  fontWeight: 900,
                  textDecoration: 'none',
                  border: '1px solid #EEE',
                  lineHeight: '1em',
                }}
                href="mailto:hello@commonknowledge.coop"
              >
                <span style={{ verticalAlign: 'middle', paddingRight: 10 }}>
                  Let's talk
                </span>
                <FaEnvelope style={{ verticalAlign: 'middle' }} />
              </a>
            </Text>
          </Box>
        </Flex>
        <center>
          <Box mt={[3, 4, 4]}>
            <SocialLinks />
          </Box>
        </center>
      </Container>
    </Wrapper>
    <Container
      mt={[4, 5]}
      pt={[4, 5, 5]}
      pb={[5, 6, 7]}
      css={{ background: theme.colors.primary, color: 'white' }}
    >
      <Wrapper width={[1, 1, 900]}>
        <FundingPanel />
      </Wrapper>
    </Container>
  </Layout>
)

export default IndexPage
