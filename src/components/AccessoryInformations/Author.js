import React from 'react';
import PropTypes from 'prop-types';

import { author as blogAuthor } from 'config';

const Author = ({name, url, twitter}) => {
  const isBlogAuthor = blogAuthor.name === name;

  if (isBlogAuthor && !blogAuthor.shouldDisplay) {
    return null;
  }

  const href = isBlogAuthor
    ? blogAuthor.url
    : (() => {
      const isValid  = (article, blog) =>
        typeof article === 'string' && article !== blog

      if (isValid(url, blogAuthor.url)) {
        return url;
      }

      if (isValid(twitter, blogAuthor.twitter)) {
        return `https://twitter.com/${twitter}`
      }

      return null;
    })();

  return (
    <>
      {href
        ? (
          <a
            href={href}
            target="_blank"
            rel="author external noopener noreferrer"
          >
          {name}
          </a>
        )
        : <>{name}</>
      }
      <br />
    </>
  )
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
