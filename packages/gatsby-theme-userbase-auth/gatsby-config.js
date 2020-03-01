require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-userbase",
      options: {
        APP_ID: process.env.USERBASE_APP_ID,
      },
    },
  ]
};
