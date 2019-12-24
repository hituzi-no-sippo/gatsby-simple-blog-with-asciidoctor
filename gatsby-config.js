const { toPairs } = require('ramda');
const {
  pathPrefix,
  title,
  author,
  description,
  siteUrl,
  repository,
  twitter = '',
  github = '',
  medium = '',
  facebook = '',
  disqusShortName = '',
  lang = 'en',
  googleTrackingId: trackingId,
} = require('./config').site;
const supportedLanguages = require('./config').supportedLanguages;

module.exports = {
  pathPrefix,
  siteMetadata: {
    title,
    author,
    description,
    siteUrl,
    repository,
    social: {
      twitter,
      github,
      medium,
      facebook,
    },
    disqusShortName,
    lang,
    langsEntries: toPairs(supportedLanguages),
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
        ignore: ['**\/_includes'],
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
      resolve: `@hitsuji_no_shippo/gatsby-transformer-asciidoc`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId,
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
        icon: `static/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: '@hitsuji_no_shippo/gatsby-plugin-i18n',
      options: {
        langKeyDefault: lang,
        useLangKeyLayout: false,
        pagesPaths: ['/content/blog/'],
        lightweightMarkup: {
          language: "Asciidoc",
        }
      },
    },
  ],
};
