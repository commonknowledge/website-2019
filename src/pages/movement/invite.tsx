import React, { useEffect } from 'react'
import { Image, Text, Box, Heading } from 'rebass'
import queryString from 'query-string'
import Layout from '../../components/layout'
import logo from '../../images/logo-transparent.png'

const Invite: React.SFC = () => {
  const { code } = queryString.parse(location.search)
  const formURL = `https://commonknowledge.coop/movement`
  const message = encodeURIComponent(
    `Hey! You should check this out. Sign up with Movement App and they'll personally get you involved in local community activism ASAP. ${formURL}?code=${code}`
  )
  const whatsappURL = `whatsapp://send?abid=BROADCAST_ID&text=${message}`

  useEffect(() => {
    document.location.replace(whatsappURL)
  })

  return (
    <Layout>
      <Box my={[4, 5, 6]}>
        <Text textAlign="center">
          <Image src={logo} width={200} />
          <Heading mt={[3, 3, 4]}>
            Build your movement by inviting friends
          </Heading>
          <Text mt={[3, 3, 4]}>(Open this page on your phone.)</Text>
        </Text>
      </Box>
    </Layout>
  )
}

export default Invite
