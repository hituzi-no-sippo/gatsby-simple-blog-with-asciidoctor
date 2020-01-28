import React from 'react';

import { Link } from 'gatsby';

import { translationsLink as translationsLinkPropTypes} from 'utils/propTypes';

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
  translationsLink: translationsLinkPropTypes.isRequired,
};

export default TranslationsLink;
