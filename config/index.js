const site = {
  pathPrefix: '/gatsby-simple-blog',
  title: 'Gatsby Starter Blog',
  author: 'hitsji no shippo',
  description: 'A starter blog with asciidoctor.',
  siteUrl: 'https://lucid-bell-34419c.netlify.com',  // demo site url
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

const repository = {
  url: 'https://github.com/hitsuji-no-shippo/gatsby-simple-blog-with-asciidoctor',
  name: 'gatsby-simple-blog-with-asciidoctor',
  displaysLink: true,
}

const articles = {
  dir: 'hitsuji-no-shippo/sample-articles-for-asciidoctor',
  isOtherRepositroy: true,
  filePath: { Asciidoc: 'paths.from.source.full' },
  ignore: ['asciidoc-examples/**/*.adoc'],
};

module.exports = {
  site,
  supportedLanguages,
  repository,
  articles,
};
