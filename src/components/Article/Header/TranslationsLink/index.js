import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import './TranslationsLink.css';

function TranslationsLink({ translationsLink, ...restProps }) {
  if (translationsLink == null || translationsLink.length === 0) {
    return null;
  }

  return (
    <div className="translation-root" {...restProps}>
      {translationsLink.map(({ name, url, langKey }) => (
        <Link
          key={name}
          to={url}
          className="translation-link"
          rel="alternate"
          hrefLang={langKey}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

TranslationsLink.propTypes = {
  translationsLink: PropTypes.array.isRequired,
};

export default TranslationsLink;
