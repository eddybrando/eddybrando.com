module.exports = {
  siteName: "Eddybrando.com",
  siteUrl: "https://eddybrando.com",
  plugins: [
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-NCHDV3N",
        enabled: process.env.NODE_ENV !== "development",
        debug: false,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
  ],
};
