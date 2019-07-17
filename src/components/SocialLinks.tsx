import * as React from 'react'
import { Text } from '../utils/rebass'
import {
  FaGithub,
  FaGitlab,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa'
import theme from '../styles/theme'

export default () => (
  <Text fontSize={[3, 3, 4]} css={{ opacity: 0.25 }}>
    <a
      style={{ color: theme.colors.primary, paddingRight: 24 }}
      href="https://twitter.com/platformpolitic"
    >
      <FaTwitter />
    </a>
    {/* <a
      style={{ color: theme.colors.primary, paddingRight: 24 }}
      href="https://facebook.com/commonknowledgecoop"
    >
      <FaFacebook />
    </a> */}
    <a
      style={{ color: theme.colors.primary, paddingRight: 24 }}
      href="mailto:hello@commonknowledge.coop"
    >
      <FaEnvelope />
    </a>
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
  </Text>
)
