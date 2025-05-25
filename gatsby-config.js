/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/gatsby-recipes",
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
    ,
  //   {
  //   resolve: "gatsby-source-wordpress",
  //   options: {
  //     // url: "http://karly.ct.ws/graphql",
  //     url: "http://localhost:10053/graphql",
  //     schema: {
  //       timeout: 1000000,
  //       perPage: 10,
  //       requestConcurrency: 5,
  //     },
  //     // url:process.env.API_URL
  
  //   },
  // }

  ],
}
