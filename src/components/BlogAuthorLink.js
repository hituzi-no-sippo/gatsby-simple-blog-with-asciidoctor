import React from 'react';
import PropTypes from 'prop-types';

import { author } from 'config'

const BlogAuthorLink = ({children}) => {
  return typeof author.url === 'string'
    ? <a href={author.url}
        target="_blank"
        rel="author external noopener noreferrer">
        {children}
      </a>
    : children;
}

BlogAuthorLink.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.element]
  ).isRequired,
};

export default BlogAuthorLink;
