import { ViewElement } from "./atoms"
import { GridProps, Grid } from "@theme-ui/components"
import React from "react"
import { FooterBlock } from "./page"
import { Link } from "./nav"

export const ContactDetails: ViewElement<GridProps> = props => (
  <Grid gap={4} columns={[2, null, 4]} {...props}>
    <Link to="https://www.openstreetmap.org/#map=19/51.52417/-0.05497">
      <FooterBlock title="Visit">
        Pelican House
        <br />
        138-148 Cambridge Heath Road
        <br />
        London, E1 5QJ
      </FooterBlock>
    </Link>

    <FooterBlock title="Contact">
      <Link to="https://commonknowledge.youcanbook.me/">Book a meeting</Link>
      {/* <Link>PGP Key</Link> */}
    </FooterBlock>

    <FooterBlock title="Elsewhere">
      <Link to="http://twitter.com/cmmonknowledge">Twitter</Link>
      <Link to="http://github.com/commonknowledge">GitHub</Link>
      <Link to="https://git.coop/commonknowledge">Git.coop</Link>
    </FooterBlock>

    <FooterBlock title="Support our work">
      <Link to="https://opencollective.com/commonknowledge/donate">
        Open Collective
      </Link>
      <Link to="https://commerce.coinbase.com/checkout/bcda7a9f-01a8-4835-b586-13558aa2cb2d">
        Coinbase
      </Link>
    </FooterBlock>
  </Grid>
)
