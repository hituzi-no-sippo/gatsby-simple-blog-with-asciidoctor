import React from 'react';
import PropTypes from 'prop-types';

import {
  articleQuery as articleQueryPropTypes,
  translationsLink as translationsLinkPropTypes,
} from 'utils/propTypes';

import Header from './Header'
import LightWeightMarkup from './LightweightMarkup'
import Footer from './Footer'

const Article = ({article, slug, translationsLink, homeUrl}) => {
  return (
    <article>
      <Header
        article={article}
        slug={slug}
        translationsLink={translationsLink}
        homeUrl={homeUrl}
      />
      <LightWeightMarkup html={article.html}/>
      <Footer article={article}/>
    </article>
  );
}

Article.propTypes = {
  article: articleQueryPropTypes.isRequired,
  slug: PropTypes.string.isRequired,
  translationsLink: translationsLinkPropTypes.isRequired,
  homeUrl: PropTypes.string.isRequired,
};

export default Article;
