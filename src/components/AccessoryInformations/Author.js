import React from 'react';
import PropTypes from 'prop-types';

import BlogAuthorLink from 'components/BlogAuthorLink';

import { author as blogAuthor } from 'config';

const Author = ({name, url, twitter}) => {
  const Component = (() => {
    if (blogAuthor.name === name) {
      return blogAuthor.shouldDisplay
        ? <BlogAuthorLink>{name}</BlogAuthorLink>
        : null;
    }

    const href = (() => {
      if (/^http/.test(url) && url !== blogAuthor.url) {
        return url;
      }

      if (typeof twitter === 'string' && twitter !== blogAuthor.twitter) {
        return `https://twitter.com/${twitter}`
      }

      return null;
    })();

    return href
      ? <a
          href={href}
          target="_blank"
          rel="author external noopener noreferrer"
        >
          {name}
        </a>
      : name;
  })();

  return Component ? <>{Component}<br /></> : null;
};

Author.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  twitter: PropTypes.string,
};

Author.defaultProps = {
  url: null,
  twitter: null,
}

export default Author;
