/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, CardHeader, CardMeta, CardTitle, CardContent } from "./card"
import { getContentType, ContentItem, ContentType } from "../data/content-type"
import { YearRange, NumericDate } from "../data/date"
import { LiteralLink, Link } from "./nav"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid } from "@theme-ui/components"
import Img from "gatsby-image"
import { FC, Fragment } from "react"
import { Content } from "./page"

export const ContentCard: FC<{ content: ContentItem }> = props => {
  switch (getContentType(props.content)) {
    case ContentType.work:
      return <WorkCard {...props} />
    case ContentType.writing:
      return <WritingCard {...props} />
    default:
      return null
  }
}

export const WritingCard: FC<{ content: ContentItem; compact?: boolean }> = ({
  content,
  compact,
}) => (
  <Card>
    <CardHeader>
      <ArticleMeta compact={compact} content={content} />
    </CardHeader>

    <CardTitle sx={{ fontSize: [24, 32] }}>
      <Link sx={{ opacity: "inherit" }} to={`/writing/` + content.file.name}>
        {content.frontmatter.title} <span sx={{ color: "accent" }}>↗</span>
      </Link>
    </CardTitle>

    <CardContent>
      <Grid gap={3} columns={[1, null, compact ? 1 : 2]}>
        <Content
          sx={{
            position: "relative",
          }}
        >
          {content.frontmatter.intro || content.excerpt}
        </Content>
        <Content>
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
        </Content>
      </Grid>
    </CardContent>
  </Card>
)

export const ArticleMeta: FC<{ content: ContentItem; compact?: boolean }> = ({
  content,
  compact,
}) => (
  <Grid gap={[1, null, 3]} columns={[2, null, compact ? 2 : 4]}>
    {!compact && <CardMeta label="Category">Writing</CardMeta>}
    {!compact && <span />}
    <CardMeta label="Date">
      <NumericDate value={content.frontmatter.date} />
    </CardMeta>
    <CardMeta label="Length">{content.timeToRead} minute read</CardMeta>
  </Grid>
)

export const WorkCard: FC<{ content: ContentItem }> = ({ content }) => (
  <Card>
    <CardHeader>
      <WorkMeta content={content} />
    </CardHeader>
    <CardTitle>{content.frontmatter.title}</CardTitle>
    <CardContent>
      <Grid gap={3} columns={[1, null, 2]}>
        <Content>
          <MDXRenderer>{content.body}</MDXRenderer>
        </Content>
        <Content>
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
        </Content>
      </Grid>
    </CardContent>
  </Card>
)

export const WorkMeta: FC<{ content: ContentItem }> = ({ content }) => (
  <Grid gap={[1, null, 3]} columns={[2, null, 4]}>
    <CardMeta label="Category">{getContentType(content)}</CardMeta>
    {content.frontmatter.client && (
      <CardMeta label="Organisation">{content.frontmatter.client}</CardMeta>
    )}
    {content.frontmatter.date && (
      <CardMeta label="Date">
        <YearRange value={content.frontmatter} />
      </CardMeta>
    )}
    {content.frontmatter.url && (
      <CardMeta label="Link">
        <LiteralLink arrow to={content.frontmatter.url} />
      </CardMeta>
    )}
  </Grid>
)
