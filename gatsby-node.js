/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const webpackFixFs = require("./node/webpackFixFs").default
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const fs = require("fs")

const sections = fs.readdirSync(path.join(__dirname, "content"))

const getLayoutComponent = slug => {
  // look first for a matching layout for this page type, otherwise fall back
  // to the default

  const customLayout = path.join(
    __dirname,
    "src",
    "layouts",
    slug + ".layout.tsx"
  )
  const defaultLayout = path.join(
    __dirname,
    "src",
    "layouts",
    "default.layout.tsx"
  )

  if (fs.existsSync(customLayout)) {
    return customLayout
  } else {
    return defaultLayout
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter implements Node {
      title: String!
      client: String
      date: String
      endDate: String
      intro: String
      featuredImage: File
      weight: Float
      date: String
      url: String
    }
  `
  createTypes(typeDefs)
}

exports.onCreateWebpackConfig = args => {
  // required fix for package `qrcode.js`
  webpackFixFs(args)
}
