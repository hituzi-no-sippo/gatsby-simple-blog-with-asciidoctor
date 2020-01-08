import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header'
import LightWeightMarkup from './LightweightMarkup'

const Article = ({post, translationsLink, languageContexts}) => {
  return (
    <article>
      <Header
       post={post}
       translationsLink={translationsLink}
       languageContexts={languageContexts}
      />
      <LightWeightMarkup html={post.html}/>
    </article>
  );
}

Article.propTypes = {
  post: PropTypes.object.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Article;
