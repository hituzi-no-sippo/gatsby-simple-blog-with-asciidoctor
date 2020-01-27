import React from 'react';
import PropTypes from 'prop-types';

import TagList from 'components/TagList';
import AccessoryInformations from 'components/AccessoryInformations';

import { rhythm, scale } from 'utils/typography';

import TranslationsLink from './TranslationsLink';


const Header = ({article, slug, translationsLink, languageContexts}) => {
  return (
    <header>
      <h1>{article.document.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        <AccessoryInformations
          dateStr={article.revision.date}
          timeToRead={article.timeToRead}
          disqus={{
            id: article.id,
            title: article.document.title,
            slug,
            show: article.pageAttributes.disqus !== false,
          }}
          author={{
            name: article.author.fullName,
            url: article.pageAttributes.author_url,
            twitter: article.pageAttributes.author_twitter,
          }}
        />
      </p>

      {article.pageAttributes.tags &&
       <TagList tags={article.pageAttributes.tags}
        baseUrl={`${languageContexts.homeLink}tags`} />}
      <TranslationsLink
        translationsLink={translationsLink}
        style={{ margin: '-0.5rem 0 1.5rem' }}
      />
    </header>
  );
}

Header.propTypes = {
  article: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Header;
