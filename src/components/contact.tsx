import { ViewElement } from "./atoms"
import { GridProps, Grid } from "@theme-ui/components"
import React from "react"
import { FooterBlock } from "./page"
import { Link } from "./nav"

export const ContactDetails: ViewElement<GridProps> = props => (
  <Grid gap={4} columns={[2, null, 4]} {...props}>
    <Link to="https://www.openstreetmap.org/way/292337102">
      <FooterBlock title="Visit">
        Pelican House
        <br />
        138-148 Cambridge Heath Road
        <br />
        London, E1 5QJ
      </FooterBlock>
    </Link>

    <FooterBlock title="Contact">
      <Link to="https://calendly.com/common-knowledge/30min">Book a meeting</Link>
      {/* <Link>PGP Key</Link> */}
    </FooterBlock>

    <FooterBlock title="Elsewhere">
      <Link to="http://twitter.com/commonknowledge">Twitter</Link>
      <Link to="http://github.com/commonknowledge">GitHub</Link>
      <Link to="https://git.coop/commonknowledge">Git.coop</Link>
    </FooterBlock>

    <FooterBlock title="Support our work">
      <Link to="https://opencollective.com/commonknowledge/">
        Open Collective
      </Link>
    </FooterBlock>
  </Grid>
)
