import React from 'react';

import minimatch from 'minimatch';

import { repository, articles } from 'config'

import { articleQuery as articleQueryPropTypes, } from 'utils/propTypes';

const Footer = ({article}) => {
  if (!(articles.dir && articles.filePath
      && (repository.url || articles.isOtherRepositroy))) {
    return null;
  }

  const filePath = (() => {
    let value = article;

    articles.filePath[article.internal.type].split('.').some(path => {
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
  article: articleQueryPropTypes.isRequired,
};

export default Footer;
