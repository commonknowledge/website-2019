import React from 'react'
import { Heading, Box, Flex, Text } from '../utils/rebass'
import { InternalLink, ExternalLink } from '../components/link'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import Container from '../components/container'
// @ts-ignore
import logo from '../images/movement-logo.svg'
import {
  FaEye,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaGitlab,
  FaEnvelope,
} from 'react-icons/fa'
import FundingPanel from '../components/FundingPanel'
import { Link } from 'gatsby'
import theme from '../styles/theme'
import { textColor, textAlign } from '../utils/styled-system'

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
  <Layout>
    <Wrapper pt={[4, 5, 6]} pb={[4, 4, 4]} px={[3, 4, 5]}>
      <Heading fontSize={[3, 4, 6]}>
        <InternalLink to="/" css={{ 'text-transform': 'uppercase' }}>
          Common Knowledge
        </InternalLink>
      </Heading>
      <Text pb={[3, 3, 4]} fontSize={[2, 2, 3]} css={{ opacity: 0.25 }}>
        (a workers cooperative)
      </Text>
      <Text fontSize={[3, 3, 4]}>
        Activists software developers, building platform-level tools, to grow
        the grassroots left
      </Text>
      <Box mt={[3, 4, 4]}>
        <Text fontSize={[3, 3, 4]} css={{ opacity: 0.25 }}>
          <a
            style={{ color: theme.colors.primary, paddingRight: 24 }}
            href="https://github.com/commonknowledge"
          >
            <FaGithub />
          </a>
          <a
            style={{ color: theme.colors.primary, paddingRight: 24 }}
            href="https://git.coop/commonknowledge"
          >
            <FaGitlab />
          </a>
          <a
            style={{ color: theme.colors.primary, paddingRight: 24 }}
            href="https://twitter.com/platformpolitic"
          >
            <FaTwitter />
          </a>
          <a
            style={{ color: theme.colors.primary, paddingRight: 24 }}
            href="https://facebook.com/commonknowledgecoop"
          >
            <FaFacebook />
          </a>
          <a
            style={{ color: theme.colors.primary, paddingRight: 24 }}
            href="mailto:hello@commonknowledge.coop"
          >
            <FaEnvelope />
          </a>
        </Text>
      </Box>
    </Wrapper>
    <Container py={[4, 5, 6]} css={{ background: theme.colors.red }}>
      <Wrapper>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Box width={[1, 1, 0.5]}>
            <Text
              css={{ color: 'white' }}
              fontSize={[3, 3, 5]}
              fontWeight={900}
              lineHeight={1}
            >
              Test <i>Movement</i>, the prototype platform for activism
            </Text>
            <Text css={{ color: 'white' }} mt={3}>
              We're building a platform for people who are new to politics get
              involved in grassroots activism, when they aren't sure where to
              start. Movement helps you put your principles into practice, learn
              new skills + spend valuable time with locals who share your
              concerns 🙌.
            </Text>
            <Text css={{ color: 'white' }} mt={3}>
              By signing up for the prototype you'll be helping us learn how to
              make the service better, so even more people can get involved.
            </Text>
          </Box>
          <Flex
            width={[1, 1, 0.5]}
            flexDirection="column"
            justifyContent="center"
            alignItems="middle"
          >
            <div style={{ padding: '20px 20px', textAlign: 'center' }}>
              <img src={logo} style={{ width: '30%', margin: 0 }} />
            </div>
            <div
              style={{
                marginTop: 15,
                textAlign: 'center',
              }}
            >
              <Link
                style={{
                  textAlign: 'center',
                  display: 'inline-block',
                  fontSize: 32,
                  borderRadius: 100,
                  background: 'white',
                  color: theme.colors.red,
                  padding: '10px 30px',
                  fontWeight: 900,
                  textDecoration: 'none',
                }}
                to="movement"
              >
                <span>Sign up</span>
              </Link>
            </div>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
    <Wrapper px={[3, 4, 5]}>
      <Container maxWidth={textWidth} mt={[4, 5]}>
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
    <Container
      mt={[4, 5]}
      pt={[2, 3, 5]}
      pb={[5, 6, 7]}
      css={{ background: theme.colors.primary, color: 'white' }}
    >
      <Wrapper>
        <FundingPanel />
      </Wrapper>
    </Container>
  </Layout>
)

export default IndexPage
