import React from 'react';
import PropTypes from 'prop-types';

import { graphql, useStaticQuery } from 'gatsby';

const Disqus = ({ identifier, title, slug, Component }) => {
  const {
    site: {
      siteMetadata: { siteUrl, disqusShortName },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            disqusShortName
          }
        }
      }
    `,
  );

  if (!disqusShortName) {
    return null;
  }

  const config = {
    identifier,
    title,
  }

  if (typeof siteUrl === `string`) {
    config.url = `${siteUrl}/${slug}`
  }

  return (
    <Component
      shortname={disqusShortName}
      config={config}
    />
  );
}

Disqus.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default Disqus;
