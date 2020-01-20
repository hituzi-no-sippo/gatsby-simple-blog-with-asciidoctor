import React from 'react';
import PropTypes from 'prop-types';

import { DiscussionEmbed } from 'disqus-react';

import Disqus from './Disqus';

const  Embed = ({identifier, title, show, slug }) => {
  return (
    <Disqus
      identifier={identifier}
      title={title}
      show={show}
      slug={slug}
      Component={DiscussionEmbed}
    />
  );
}

Embed.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Embed;
