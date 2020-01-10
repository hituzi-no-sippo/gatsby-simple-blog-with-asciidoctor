import React from 'react';
import PropTypes from 'prop-types';

import minimatch from 'minimatch';

import { repository, articles } from 'config'

const Footer = ({post}) => {
  if (!(articles.dir && articles.filePath
      && (repository.url || articles.isOtherRepositroy))) {
    return null;
  }

  const filePath = (() => {
    let value = post;

    articles.filePath[post.internal.type].split('.').some(path => {
      value = Object.prototype.hasOwnProperty.call(value, path)
        ? value[path]
        : null;

      return Object.prototype.toString.call(value) !== `[object Object]`;
    });

    return typeof value === 'string' ? value : null;
  })();

  if (!filePath) {
    return null;
  }

  const ignores = articles.ignore
    ? articles.ignore.some(pattern => minimatch(filePath, pattern))
    : false;

  if (ignores) {
    return null;
  }

  const articlesDir = `${articles.isOtherRepositroy ? 'https://github.com' : repository.url
    }/${articles.dir}`;

  return (
    <p>
      <a href={`${articlesDir}/edit/master/${filePath}`}
        target="_blank"
        rel="noopener noreferrer">
        Edit on GitHub
      </a>
    </p>
  );
}

Footer.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Footer;
