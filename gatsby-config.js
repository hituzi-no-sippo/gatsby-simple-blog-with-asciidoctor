const { toPairs } = require('ramda');
const {
  pathPrefix,
  title,
  author,
  description,
  siteUrl,
  social,
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
    social: {
      ...{
        twitter: ''
      },
      ...social,
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
        ignore: ['**/_includes', '**/CHANGELOG.adoc', '**/README.adoc'],
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
          fileAbsolutePathField: "paths.absolute.file",
        }
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
             siteMetadata {
               title
               description
               siteUrl
             }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allAsciidoc } }) => {
              return allAsciidoc.edges.map(edge => {
                return {
                  title: edge.node.document.title,
                  description: edge.node.document.description,
                  date: edge.node.revision.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                }
              })
            },
            query: `
              {
                allAsciidoc(
                  sort: { order: DESC, fields: [revision___date] },
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      document {
                        title
                        description
                      }
                      revision {
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title
          },
        ],
      },
    },
  ],
};
