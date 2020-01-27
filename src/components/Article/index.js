import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header'
import LightWeightMarkup from './LightweightMarkup'
import Footer from './Footer'

const Article = ({article, slug, translationsLink, languageContexts}) => {
  return (
    <article>
      <Header
        article={article}
        slug={slug}
        translationsLink={translationsLink}
        languageContexts={languageContexts}
      />
      <LightWeightMarkup html={article.html}/>
      <Footer article={article}/>
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Article;
