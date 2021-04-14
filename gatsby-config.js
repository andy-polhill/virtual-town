/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Andrew Polhill - Engineering Manager",
    image: "./images/me.jpeg",
    url: "https://andy-polhill.github.io",
    twitterUsername: "andy_polhill",
    description:
      "Engineer Manager with experience of managing managers and enabling teams",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./README.md",
      },
    },
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
        rel: "nofollow"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet"
  ]
};
