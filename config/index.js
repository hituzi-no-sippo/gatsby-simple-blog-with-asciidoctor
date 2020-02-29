const GITHUB_PROFILE_URL = 'https://github.com/hitsuji-no-shippo';

const author = {
  name: 'hitsuji no shippo',
  email: 'xxx@yyy.zzz',
  url: GITHUB_PROFILE_URL,
  twitter: 'hns_equal_st',
}

const site = {
  pathPrefix: '/',
  title: 'Gatsby Starter Blog',
  description: 'A starter blog with asciidoctor.',
  // demo site url
  siteUrl: 'https://gatsby-simple-blog-with-asciidoctor-demo.netlify.com',
  social : {
    twitter: author.twitter,
  },
  disqusShortName: 'gatsby-simple-blog',
  googleTrackingId: '',
  lang: 'en',
  displayTranslations: true,
};

const supportedLanguages = {
  en: 'English',
  ja: '日本語',
};

const repository = {
  url: 'https://github.com/hitsuji-no-shippo/gatsby-simple-blog-with-asciidoctor',
  name: 'gatsby-simple-blog-with-asciidoctor',
  displaysLink: true,
}

const articles = {
  filePath: { Asciidoc: 'paths.from.source.full' },
  ignore: ['asciidoctor-examples/**/*.adoc'],
};

const linksInBio = {
  twitter: `https://twitter.com/${author.twitter}`,
  GitHub: GITHUB_PROFILE_URL,
}

const dateDisplay = {
  format: "LL",
  diff: {
    patternWithNotConvert: /month|year/,
    newPost: {
      boundary: 7,
      emoji: '🎉',
    },
  },
}

module.exports = {
  author,
  site,
  supportedLanguages,
  repository,
  articles,
  linksInBio,
  dateDisplay,
};
