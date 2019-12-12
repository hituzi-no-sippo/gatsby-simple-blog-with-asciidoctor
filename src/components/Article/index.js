import React from 'react';
import PropTypes from 'prop-types';

const Article = ({article}) => {
  return <article className='content' dangerouslySetInnerHTML={{ __html: article }} />
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
};

export default Article;
