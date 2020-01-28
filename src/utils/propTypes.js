import PropTypes from 'prop-types';

const createPagesQuery = PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      langKey: PropTypes.string.isRequired,
      directoryName: PropTypes.string.isRequired,
    }).isRequired,
    document: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    revision: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    pageAttributes: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  });
const translationsLink = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    langKey: PropTypes.string.isRequired,
  }).isRequired);
const location = PropTypes.shape({
  href: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  protocol: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  hostname: PropTypes.string.isRequired,
  port: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  state: PropTypes.shape({
    key: PropTypes.string.isRequired,
  })
});
const articleQuery =  PropTypes.shape({
  id: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  internal: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  document: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  revision: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  pageAttributes: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
    disqus: PropTypes.bool,
    author_twitter: PropTypes.string,
    author_url: PropTypes.string,
  }).isRequired,
  paths: PropTypes.shape({
    from: PropTypes.shape({
      source: PropTypes.shape({
        full: PropTypes.string.isRequired
      }).isRequired,
    }).isRequired,
  }).isRequired,
})

export { createPagesQuery, translationsLink, location, articleQuery };
