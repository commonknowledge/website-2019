/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const webpackFixFs = require("./node/webpackFixFs").default
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateWebpackConfig = args => {
  // required fix for package `qrcode.js`
  webpackFixFs(args)
}
