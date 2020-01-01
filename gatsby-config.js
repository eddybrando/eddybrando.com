module.exports = {
  siteMetadata: {
    title: `Eddybrando.com`,
    description: ``,
    author: `Eddybrando Vásquez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eddybrando`,
        short_name: `Eddybrando`,
        start_url: `/`,
        background_color: `#bfd4f7`,
        theme_color: `#bfd4f7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: "favicons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "favicons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "favicons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "favicons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "favicons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Josefin Sans:400,700:latin"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-NCHDV3N",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
