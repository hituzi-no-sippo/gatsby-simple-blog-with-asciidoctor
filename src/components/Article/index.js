import React from 'react';
import PropTypes from 'prop-types';

import './light.scss'
import './dark.scss'

const Article = ({article}) => {
  return <article className='content' dangerouslySetInnerHTML={{ __html: article }} />
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
};

export default Article;
