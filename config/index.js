const site = {
  pathPrefix: '/gatsby-simple-blog',
  title: 'Gatsby Starter Blog',
  author: 'hitsji no shippo',
  description: 'A starter blog with asciidoctor.',
  siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
  articles: {
    dir: 'hitsuji-no-shippo/sample-articles-for-asciidoctor',
    ignore: ['asciidoc-examples/**/*.adoc'],
  },
  twitter: 'hns_equal_st',
  github: 'hitsuji-no-shippo',
  medium: 'thundermiracle',
  facebook: 'thundermiracle',
  disqusShortName: 'gatsby-simple-blog',
  googleTrackingId: '',
  lang: 'en',
  displayTranslations: true,
};

const supportedLanguages = {
  en: 'English',
  'ja': '日本語',
};

module.exports = {
  site,
  supportedLanguages,
};
