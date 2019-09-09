module.exports = {
  siteMetadata: {
    title: `Rob Phoenix`,
    author: `Rob Phoenix`,
    description: `Frontend developer, working remote in rural North Wales.`,
    keywords: [`blog`, `gatsby`, `javascript`, `react`],
    bio: `I used to be a practising artist, then, in my late thirties, studied to be a network engineer and started learning how to write code. After some time exploring a number of backend languages I realised my passion was for the frontend; UI/UX, Design Systems, Typography, a11y, JavaScript, HTML, and, yes, after some hate, CSS. Currently, I'm building internal enterprise UIs with React, GraphQL & CSS-in-JS.`,
    lang: `en`,
    siteUrl: `https://robphoenix.com`,
    social: {
      twitter: `brdltbrncle`,
      github: `robphoenix`,
      linkedin: `robphoenix`,
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
