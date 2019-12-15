import React from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/v4-shims.min.css';

import './common.scss'
import './light.scss'
import './dark.scss'

const Article = ({article}) => {
  return <article className='content' dangerouslySetInnerHTML={{ __html: article }} />
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
};

export default Article;
