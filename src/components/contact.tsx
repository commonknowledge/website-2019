import { ViewElement } from "./atoms"
import { GridProps, Grid } from "@theme-ui/components"
import React from "react"
import { FooterBlock } from "./page"
import { Link } from "./nav"

export const ContactDetails: ViewElement<GridProps> = props => (
  <Grid gap={4} columns={[2, null, 4]} {...props}>
    <Link to="https://www.openstreetmap.org/query?lat=51.56466&lon=-0.10876#map=18/51.56458/-0.10913">
      <FooterBlock title="Visit">
        Space4
        <br />
        113 Fonthill Road
        <br />
        London, N4 3HH
      </FooterBlock>
    </Link>

    <FooterBlock title="Contact">
      <Link to="https://commonknowledge.youcanbook.me/">Book a meeting</Link>
      {/* <Link>PGP Key</Link> */}
    </FooterBlock>

    <FooterBlock title="Elsewhere">
      <Link to="http://twitter.com/cmmonknowledge">Twitter</Link>
      <Link to="http://github.com/commonknowledge">Github</Link>
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
