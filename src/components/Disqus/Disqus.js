import React from 'react';
import PropTypes from 'prop-types';

import { graphql, useStaticQuery } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

function Disqus({ identifier, title, slug, show }) {
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

  if (!disqusShortName || !show) {
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
    <DiscussionEmbed
      shortname={disqusShortName}
      config={config}
    />
  );
}

Disqus.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Disqus;
