import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { rhythm } from 'utils/typography';

function Footer() {
  const {
    site: {
      siteMetadata: { repository },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            repository {
              url
              name
              displaysLink
            }
          }
        }
      }
    `,
  );

  return repository.displaysLink ? (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        Made of{' '}
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
