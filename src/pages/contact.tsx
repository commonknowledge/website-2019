/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import { CardList, Card, CardContent } from "../components/card"
import { Fragment } from "react"
import { PageRoot, Connection, ContentItem } from "../data/content-type"
import { ContentCard } from "../components/content-card"
import { PageFooter } from "../components/page"
import { ContactDetails } from "../components/contact"
import { Link } from "../components/nav"
import { MailChimpForm } from "../components/mailchimp-form"

const ContactPage = () => (
  <Fragment>
    <SEO title="Common Knowledge" />

    <Card>
      <CardContent sx={{ pl: [null, null, null, "50%"] }}>
        <div
          sx={{
            fontWeight: 500,
            lineHeight: "100%",
            mb: 4,
            fontSize: [18, 38],
          }}
        >
          <div>Interested in working with us?</div>
          <Link variant="accent" to="mailto:hello@commonknowledge.coop">
            hello@commonknowledge.coop
          </Link>
        </div>

        <ContactDetails columns={1} />
      </CardContent>
    </Card>
    <MailChimpForm />
  </Fragment>
)

export default ContactPage
