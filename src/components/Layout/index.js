import React from 'react';
import PropTypes from 'prop-types';

import { useLang } from 'context/LanguageContext';
import { rhythm } from 'utils/typography';

import LanguageBar from './LanguageBar';
import Header from './Header';
import Footer from './Footer';
import ReadModeToggle from './ReadModeToggle';
import ScrollUp from './ScrollUp';
import Breadcrumbs from './Breadcrumbs';

function Layout({ children, pathname, title, breadcrumbs }) {
  const { lang, homeLink, refresh } = useLang();

  React.useEffect(() => {
    refresh(pathname);
  }, [pathname, refresh]);

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
        fontFamily: 'var(--systemFont)',
      }}
    >
      <LanguageBar lang={lang} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `2.625rem ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.625rem',
          }}
        >
          <Header base={homeLink} pathname={pathname} title={title} />
          <ReadModeToggle />
        </header>
        <Breadcrumbs
          base={homeLink}
          langKey={lang}
          data={breadcrumbs}
          showTop={true}
          style={{ marginTop: '-1.5rem' }}
        />
        {children}
        <Footer />
        <ScrollUp />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.bool,
  ])).isRequired,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
  }))
};

Layout.defaultProps = {
  breadcrumbs: null,
};

export default Layout;
