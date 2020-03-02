# gatsby-theme-userbase-auth

A Gatsby that comes with an auth flow using [Userbase](https://userbase.com/)

## Config

Create a Userbase account or log in.

In your gatsby project, run, yarn add gatsby-theme-userbase-auth

Set up your environment variables

`.env.development`

Get your appId from [here](https://v1.userbase.com/)

USERBASE\_APP_ID=YOUR\_APP\_ID\_HERE

In `gatsby-config.js`, add the config below to your plugins array

``` 
require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}',
})
```
```
module.exports ={
  plugins: [
    {
      resolve: 'gatsby-theme-userbase-auth',
      options: {
        APP_ID: process.env.USERBASE_APP_ID,
      }
    }
  ]
}
```

run `gatsby develop`

You should be able to use the signUp/Login button in the header


