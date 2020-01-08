import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import minimatch from 'minimatch';

const Footer = ({post}) => {
  const {
    site: {
      siteMetadata: { repository, articles },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            repository {
              url
            }
            articles {
              dir
              filePath {
                Asciidoc
              }
              isOtherRepositroy
              ignore
            }
          }
        }
      }
    `,
  );

  // Can't use `null` in siteMetadata. #103
  if (articles.dir === '' || articles.filePath === '') {
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

  if (!filePath || articles.ignore.some(pattern => minimatch(filePath, pattern))) {
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
