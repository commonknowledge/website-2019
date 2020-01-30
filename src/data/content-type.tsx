import { basename, dirname } from "path"
import { graphql } from "gatsby"
import { FC } from "react"

export interface ContentItem {
  id: string
  fileAbsolutePath: string
  timeToRead: number
  file: {
    name: string
  }
  excerpt: string
  frontmatter: {
    title: string
    client?: string
    intro?: string
    date?: string
    endDate?: string
    date?: string
    featuredImage?: {
      childImageSharp: {
        fluid: any
      }
    }
    url?: string
  }
  body: string
}

export const contentNodeFragment = graphql`
  fragment ContentNodeFragment on Mdx {
    id
    body
    fileAbsolutePath
    excerpt
    timeToRead
    file: parent {
      ... on File {
        name
      }
    }
    frontmatter {
      title
      client
      intro
      date
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      endDate
      date
      url
    }
  }
`

export type Edge<T> = { node: T }
export type Connection<T> = { edges: Edge<T>[] }
export type PageRoot<Data> = FC<{ data: Data }>

export const ContentType = {
  work: "Project",
  writing: "Writing",
}

export const getContentType = ({ fileAbsolutePath }: ContentItem) => {
  return (ContentType as any)[basename(dirname(fileAbsolutePath, ".mdx"))]
}
