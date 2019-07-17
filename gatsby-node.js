/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
const webpackFixFs = require('./node/webpackFixFs').default

exports.onCreateWebpackConfig = args => {
  // required fix for package `qrcode.js`
  webpackFixFs(args)
    node: {
      fs: 'empty',
    },
  })
}
