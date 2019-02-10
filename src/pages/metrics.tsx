import * as React from 'react'
import useGoogleSheet from '../hooks/useGoogleSheet'
import { Text, Flex, Heading, Box } from '../utils/rebass'
import Metric from '../components/Metric'
import Layout from '../components/layout'
import DefaultLayout from '../components/defaultLayout'
import Wrapper from '../components/wrapper'
import { useTrail, animated } from 'react-spring'

const Metrics: React.SFC<GetComponentProps<typeof Box>> = props => {
  const data = useGoogleSheet({
    url:
      'https://docs.google.com/spreadsheets/d/1BU32Yf9MNX_rbHxus1ClG3EDSpjKbljl7orDJGv3lM0/edit#gid=1108467446',
    query: 'select *',
  })

  const trail =
    data &&
    useTrail(data.length, {
      opacity: 1,
      marginLeft: `0px`,
      from: {
        opacity: 0,
        marginLeft: `-10px`,
      },
    })

  return (
    <Flex {...props} flexWrap="wrap">
      {!data || !data.map ? (
        <Text my={3} fontSize={6}>
          ⏳
        </Text>
      ) : (
        trail &&
        trail.map(({ opacity, marginLeft }, i) => {
          const {
            cellsArray: [name, value, type],
          } = data[i]
          return (
            <animated.div
              key={name}
              style={{ opacity, marginLeft, width: '50%' }}
            >
              <Metric name={name} value={value} type={type} />
            </animated.div>
          )
        })
      )}
    </Flex>
  )
}

const Page: React.SFC = () => {
  const now = new Date(Date.now()) as any
  const firstDayOfSprint1 = new Date('Mon Oct 29 2018 09:00:00 GMT+0000') as any
  const days = (now - firstDayOfSprint1) / 1000 / 60 / 60 / 24

  return (
    <DefaultLayout>
      <Wrapper>
        <Heading>KPIs </Heading>
        <Heading fontSize={3} opacity={0.6}>
          since work began <u>{days.toFixed(0)}</u> days ago
        </Heading>
        <Flex
          flexDirection={['row', 'row', 'row-reverse']}
          flexWrap={['wrap', 'wrap', 'nowrap']}
        >
          <Box width={[1, 1, 0.5]} opacity={0.5} pl={[0, 0, 3]} pt={3}>
            The numbers originate from a Google Sheet. We'll eventually display
            these metrics as graphs. We need to make a form that posts new
            victories, so we can aggregate / slice / dice these numbers on the
            fly.
          </Box>
          <Metrics width={[1, 1, 0.5]} />
        </Flex>
      </Wrapper>
    </DefaultLayout>
  )
}

export default Page
