import React from 'react';
import PropTypes from 'prop-types';

import minimatch from 'minimatch';

import { repository, articles } from 'config'

import { articleQuery as articleQueryPropTypes, } from 'utils/propTypes';

const Footer = ({article}) => {
  if (!(articles.dir && articles.filePath
      && (repository.url || articles.isAnotherRepository))) {
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

  const articlesDir = `${articles.isAnotherRepository ? 'https://github.com' : repository.url
    }/${articles.dir}`;

  const GitHubLink = ({slug, text}) =>
    <a href={`${articlesDir}/${slug}/master/${filePath}`}
      target="_blank"
      rel="external noopener noreferrer">
      {text}
    </a>

  GitHubLink.propTypes = {
    slug: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  return (
    <p>
      <GitHubLink slug="edit" text="Edit" />
      &nbsp;•&nbsp;
      <GitHubLink slug="commits" text="View history" />
      &nbsp; in GitHub.
    </p>
  );
}

Footer.propTypes = {
  article: articleQueryPropTypes.isRequired,
};

export default Footer;
