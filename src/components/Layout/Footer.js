import React from 'react';

import { rhythm } from 'utils/typography';

import { repository } from 'config'

function Footer() {
  return (repository.url && repository.displaysLink) ? (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        Built with&nbsp;
        <a
          href={repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repository.name}
        </a>
      </p>
    </footer>
  ) : null;
}

export default Footer;
