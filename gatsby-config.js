/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/gatsby-wordpress-site",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    }
    ,{
    resolve: "gatsby-source-wordpress",
    options: {
      /*
       * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
       * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
       */
      // url: "http://karly.ct.ws/graphql",
      url: "http://localhost:10053/graphql",
      // url:process.env.API_URL
  
    },
  }

  ],
}
