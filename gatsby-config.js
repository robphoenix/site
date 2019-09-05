module.exports = {
  siteMetadata: {
    title: `Rob Phoenix`,
    author: `Rob Phoenix`,
    description: `Frontend developer, working remote in rural North Wales.`,
    keywords: [`blog`, `gatsby`, `javascript`, `react`],
    bio: `I used to be a practising artist, then, in my late thirties, studied to be a network engineer and started learning how to write code. After some time exploring a number of backend languages I realised my heart belonged to the frontend; UI, Design Systems, a11y, JavaScript, HTML, and, yes, after some hate, CSS. Currently, I'm building internal enterprise UIs with React, GraphQL & CSS-in-JS.`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
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
    `gatsby-plugin-feed`,
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
