import React, { FC, Fragment } from "react"
import { Card, CardHeader, CardMeta, CardTitle, CardContent } from "./card"
import { getContentType, ContentItem } from "../data/content-type"
import { YearRange } from "../data/date"
import { LiteralLink } from "./nav"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid } from "@theme-ui/components"
import Img from "gatsby-image"

export const ArticleMeta: FC<{ content: ContentItem }> = ({ content }) => (
  <Fragment>
    <CardMeta>{getContentType(content)}</CardMeta>
    {content.frontmatter.client && (
      <CardMeta>{content.frontmatter.client}</CardMeta>
    )}
    {content.frontmatter.startDate && (
      <CardMeta>
        <YearRange value={content.frontmatter} />
      </CardMeta>
    )}
    {content.frontmatter.url && (
      <CardMeta>
        <LiteralLink variant="faded" to={content.frontmatter.url} />
      </CardMeta>
    )}
  </Fragment>
)

export const ArticleCard: FC<{ content: ContentItem }> = ({ content }) => (
  <Card>
    <CardHeader>
      <ArticleMeta content={content} />
    </CardHeader>

    <CardTitle>{content.frontmatter.title}</CardTitle>

    <CardContent>
      <Grid gap={3} columns={[1, null, 2]}>
        <MDXRenderer>{content.body}</MDXRenderer>
        <div>
          {content.frontmatter.featuredImage?.childImageSharp?.fluid && (
            <Img
              fluid={content.frontmatter.featuredImage.childImageSharp.fluid}
            />
          )}
        </div>
      </Grid>
    </CardContent>
  </Card>
)
