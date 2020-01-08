import React from 'react';
import PropTypes from 'prop-types';

import TagList from 'components/TagList';

import { rhythm, scale } from 'utils/typography';
import { formatDate } from 'utils/i18n';
import { formatReadingTime } from 'utils/helpers';

import TranslationsLink from './TranslationsLink';


const Header = ({post, translationsLink, languageContexts}) => {
  return (
    <header>
      <h1>{post.document.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {formatDate(post.revision.date)}
        {` • ${formatReadingTime(post.timeToRead)}`}
      </p>

      {post.pageAttributes.tags &&
       <TagList tags={post.pageAttributes.tags}
        baseUrl={`${languageContexts.homeLink}tags`} />}
      <TranslationsLink
        translationsLink={translationsLink}
        langKey={languageContexts.lang}
        style={{ margin: '-0.5rem 0 1.5rem' }}
      />
    </header>
  );
}

Header.propTypes = {
  post: PropTypes.object.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Header;
