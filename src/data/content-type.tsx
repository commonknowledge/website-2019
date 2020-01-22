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
      startDate
      endDate
      publishedDate
      url
    }
  }
`

export type Edge<T> = { node: T }
export type Connection<T> = { edges: Edge<T>[] }
export type PageRoot<Data> = FC<{ data: Data }>

export const getContentType = ({ fileAbsolutePath }: ContentItem) => {
  return basename(dirname(fileAbsolutePath, ".mdx"))
}
