module.exports = {
  siteMetadata: {
    title: 'Common Knowledge',
    description:
      'Common Knowledge is a workers cooperative designing tools and infrastructure to grow the grassroots political left.',
    siteURL: 'https://commonknowledge.coop',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}