import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header'
import LightWeightMarkup from './LightweightMarkup'
import Footer from './Footer'

const Article = ({post, slug, translationsLink, languageContexts}) => {
  return (
    <article>
      <Header
       post={post}
       slug={slug}
       translationsLink={translationsLink}
       languageContexts={languageContexts}
      />
      <LightWeightMarkup html={post.html}/>
      <Footer post={post}/>
    </article>
  );
}

Article.propTypes = {
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Article;
