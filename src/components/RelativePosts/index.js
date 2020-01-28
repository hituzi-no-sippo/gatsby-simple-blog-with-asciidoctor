import React from 'react';
import PropTypes from 'prop-types';

import { formatMessage } from 'utils/i18n';
import { createPagesQuery as createPagesQueryPropTypes } from 'utils/propTypes';
import Post from './Post';

function RelativePosts({ postNodes, lang }) {
  const postNodesNotNull = postNodes.filter(x => x);

  if (postNodesNotNull.length === 0) {
    return null;
  }

  return (
    <>
      <hr />
      <div style={{ marginTop: '-1rem' }}>{formatMessage('tRelativePosts')}:</div>
      {postNodesNotNull.map(postNode => (
        <Post lang={lang} key={postNode.fields.slug} postNode={postNode} />
      ))}
    </>
  );
}

RelativePosts.propTypes = {
  postNodes: PropTypes.arrayOf(createPagesQueryPropTypes).isRequired,
  lang: PropTypes.string.isRequired,
};

export default RelativePosts;
