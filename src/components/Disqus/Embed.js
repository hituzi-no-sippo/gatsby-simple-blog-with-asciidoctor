import React from 'react';
import PropTypes from 'prop-types';

import { DiscussionEmbed } from 'disqus-react';

import Disqus from './Disqus';

const Embed = ({identifier, title, slug }) => {
  return (
    <Disqus
      identifier={identifier}
      title={title}
      slug={slug}
      Component={DiscussionEmbed}
    />
  );
}

Embed.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Embed;
