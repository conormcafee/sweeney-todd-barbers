module.exports = {
  siteMetadata: {
    title: `Sweeney Todd Barbers, Kilkenny`,
    description: `Friendly, talented barbers in the heart of Kilkenny town.  We cater for all ages and styles and no hair style is too challenging for us.  Call us today for an appointment +(353) 8640 40676.`,
    author: `@conormcafee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-files",
        path: `${__dirname}/site/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
