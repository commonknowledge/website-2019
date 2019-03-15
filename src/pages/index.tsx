import React from 'react'
import { Heading, Box, Flex, Text } from '../utils/rebass'
import { InternalLink, ExternalLink } from '../components/link'
import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import Container from '../components/container'
// @ts-ignore
import logo from '../images/movement-logo.svg'
import { FaEye, FaEnvelope, FaDiscord } from 'react-icons/fa'
import FundingPanel from '../components/FundingPanel'
import { Link } from 'gatsby'
import theme from '../styles/theme'
import { subtitleFontFamily } from '../styles/typography'
import SocialLinks from '../components/SocialLinks'

interface TextBlockProps {
  icon?: any
  text: any
  title: string
  alternate?: boolean
}

const TextBlock: React.SFC<TextBlockProps> = ({
  icon,
  title,
  text,
  alternate,
  ...props
}) => {
  const _text = (
    <Container width={[1, 1, 0.5]} px={0} mx={0}>
      <Text fontSize={1}>{text}</Text>
    </Container>
  )

  const _image = (
    <Box width={[1, 1, 0.5]}>
      <Heading
        width={[1, 1, 0.75]}
        ml="auto"
        fontSize={[6, 6, 6]}
        textAlign={alternate && ['left', 'left', 'right']}
        {...{
          [alternate ? 'pr' : 'pl']: [0, 0, 5],
        }}
      >
        {title}
      </Heading>
      <Text
        fontSize={[4, 5]}
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
      flexDirection={['column', 'column', alternate ? 'row' : 'row-reverse']}
      {...props}
    >
      {_image}
      {_text}
    </Flex>
  )
}

const IndexPage: React.SFC = () => (
  <Layout>
    <Wrapper pt={[5, 5, 6]} pb={[5, 5, 6]}>
      <Heading fontSize={[6, 7, 7]}>
        <InternalLink to="/" style={{ textTransform: 'uppercase' }}>
          Common Knowledge
        </InternalLink>
      </Heading>
      <Text
        fontSize={[3, 3, 4]}
        lineHeight={'2em'}
        css={{ opacity: 0.25 }}
        fontFamily={subtitleFontFamily.name}
      >
        (a not-for-profit workers cooperative)
      </Text>
      <Text fontSize={[4, 4, 5]} fontFamily={subtitleFontFamily.name}>
        Activists and software developers designing platform-level tools to grow
        the grassroots left
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
              Test <i>Movement</i>, the prototype platform for activism
            </Heading>
            <Text fontSize={1} css={{ color: 'white' }} mt={3}>
              We're building a platform for people to get involved in grassroots
              activism, when they aren't sure where to start. Movement helps you
              put your principles into practice, learn new skills and spend
              valuable time with locals who share your concerns 🙌.
            </Text>
            <Text fontSize={1} css={{ color: 'white' }} mt={3}>
              Sign up and you'll be helping us learn how to make the service
              better, so even more people can get involved.
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
    <Wrapper>
      <Container mt={[4, 5]}>
        <TextBlock
          alternate
          icon={<FaEye />}
          title="What we're about"
          text={
            <>
              <p>
                Right now we're developing a toolkit to link up established
                organisers, activists and those newly politicised, and lower the
                barriers to wide-scale political activity.
              </p>
              <p>
                But our broader ambition is to explore how pervasive technology
                can be used by the many to our material benefit, in our daily
                struggles, and against all forms of domination.
              </p>
              <p>
                We want to be self-critical, transparent and strategic in our
                work.
              </p>
              <p>
                Check back soon when we'll start publishing regular reports.
              </p>
            </>
          }
        />
        <Flex flexDirection={['column', 'row']} justifyContent={'space-around'}>
          <Box my={[3, 3, 4]}>
            <Text>
              <a
                style={{
                  margin: 10,
                  textAlign: 'center',
                  display: 'inline-block',
                  fontSize: 32,
                  borderRadius: 100,
                  background: 'white',
                  color: 'black',
                  padding: '10px 30px',
                  fontWeight: 900,
                  textDecoration: 'none',
                  border: '1px solid #EEE',
                  lineHeight: '1em',
                  verticalAlign: 'center',
                }}
                href="https://community.movement.chat"
              >
                <span style={{ verticalAlign: 'middle', paddingRight: 10 }}>
                  Join the community
                </span>
                <FaDiscord style={{ verticalAlign: 'middle' }} />
              </a>
            </Text>
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
