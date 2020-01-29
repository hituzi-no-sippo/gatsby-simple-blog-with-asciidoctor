import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { CommentCount } from 'disqus-react';

import Disqus from './Disqus';

const  Embed = ({identifier, title, slug, prefix }) => {
  const CommentCountLink = ({shortname, config}) => {
    return (
      <>
        {prefix}
        <Link to={slug.replace(/\/$/, '#disqus_thread')} >
          <CommentCount shortname={shortname} config={config}>
            Comments
          </CommentCount>
        </Link>
      </>
    );
  }
  CommentCountLink.propTypes = {
    shortname: PropTypes.string.isRequired,
    config: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }

  return (
    <Disqus
      identifier={identifier}
      title={title}
      slug={slug}
      Component={CommentCountLink}
    />
  );
}

Embed.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
}

export default Embed;
