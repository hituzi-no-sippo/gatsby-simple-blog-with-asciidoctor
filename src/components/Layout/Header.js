import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { scale } from 'utils/typography';

/**
 * base MUST include slash (eg: en/)
 *
 * @param {*object} { location, title, base}
 */
function Header({ pathname, title, base }) {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}${base}`;

  if (pathname === rootPath) {
    return (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'var(--textTitle)',
          }}
          to={base}
        >
          {title}
        </Link>
      </h1>
    );
  }
  return (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
        marginBottom: 0,
        height: 42,
        lineHeight: '2.625rem',
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'rgb(255, 167, 196)',
        }}
        to={base}
      >
        {title}
      </Link>
    </h3>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
};

export default Header;
