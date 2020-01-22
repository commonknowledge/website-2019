import { basename, dirname } from "path"
import { graphql } from "gatsby"
import { FC } from "react"

export interface ContentItem {
  id: string
  fileAbsolutePath: string
  frontmatter: {
    title: string
    client?: string
    startDate?: string
    endDate?: string
    publishedDate?: string
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
    frontmatter {
      title
      client
      startDate
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      endDate
      publishedDate
      url
    }
  }
`

export type Edge<T> = { node: T }
export type Connection<T> = { edges: Edge<T>[] }
export type PageRoot<Data> = FC<{ data: Data }>

const contentTypes = {
  work: "Project",
  writing: "Writing",
}

export const getContentType = ({ fileAbsolutePath }: ContentItem) => {
  return (contentTypes as any)[basename(dirname(fileAbsolutePath, ".mdx"))]
}
