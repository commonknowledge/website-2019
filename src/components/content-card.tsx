/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, CardHeader, CardMeta, CardTitle, CardContent } from "./card"
import { getContentType, ContentItem } from "../data/content-type"
import { YearRange } from "../data/date"
import { LiteralLink } from "./nav"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid } from "@theme-ui/components"
import Img from "gatsby-image"
import { FC, Fragment } from "react"

export const ArticleCard: FC<{ content: ContentItem }> = ({ content }) => (
  <Card>
    <CardHeader>
      <ArticleMeta content={content} />
    </CardHeader>
       
    <CardTitle>{content.frontmatter.title}</CardTitle>
    <CardContent>
      <Grid gap={3} columns={[1, null, 2]}>
        <div
          sx={{
            position: "relative",
            "> *": { width: [null, null, null, "66%"] },
          }}
        >
          <MDXRenderer>{content.body}</MDXRenderer>
        </div>
        <div>
          {content.frontmatter.featuredImage?.childImageSharp?.fluid && (
            <Img
              sx={{
                maxWidth: (100 / 319) * 638 + "%",
                maxHeight: "100%",
                margin: "0 auto",
              }}
              fluid={content.frontmatter.featuredImage.childImageSharp.fluid}
            />
          )}
        </div>
      </Grid>
    </CardContent>
  </Card>
)

export const ArticleMeta: FC<{ content: ContentItem }> = ({ content }) => (
  <Fragment>
    <CardMeta label="Category">{getContentType(content)}</CardMeta>
    {content.frontmatter.client && (
      <CardMeta label="Organisation">{content.frontmatter.client}</CardMeta>
    )}
    {content.frontmatter.startDate && (
      <CardMeta label="Date">
        <YearRange value={content.frontmatter} />
      </CardMeta>
    )}
    {content.frontmatter.url && (
      <CardMeta label="Link">
        <LiteralLink to={content.frontmatter.url} />
      </CardMeta>
    )}
  </Fragment>
)
