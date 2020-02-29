import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import minimatch from 'minimatch';

import { articles as articlesConfig } from 'config'

import { articleQuery as articleQueryPropTypes, } from 'utils/propTypes';

const Footer = ({article}) => {

  const { site: { siteMetadata: { articlesDirectoryUrl } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            articlesDirectoryUrl
          }
        }
      }
    `,
  );

  if (!(/github.com/.test(articlesDirectoryUrl) && articlesConfig.filePath)) {
    return null;
  }

  const filePath = (() => {
    let value = article;

    articlesConfig.filePath[article.internal.type].split('.').some(path => {
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

  const ignores = articlesConfig.ignore
    ? articlesConfig.ignore.some(pattern => minimatch(filePath, pattern))
    : false;

  if (ignores) {
    return null;
  }

  const GitHubLink = ({slug, text}) =>
    <a href={`${articlesDirectoryUrl}/${slug}/master/${filePath}`}
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
