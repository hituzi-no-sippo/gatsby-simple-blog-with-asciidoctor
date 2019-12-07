import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LinkToSNSProfile from './LinkToSNSProfile';

function SocialBar() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={socialQuery}
      render={data => {
        const { twitter, github, medium, facebook } = data.site.siteMetadata.social;
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              margin: 'auto',
            }}
          >
            <LinkToSNSProfile
              userId={facebook}
              url='https://facebook.com/'
              displayText='Facebook' />
            <LinkToSNSProfile
              userId={twitter}
              url='https://twitter.com/'
              displayText='Twitter' />
            <LinkToSNSProfile
              userId={github}
              url='https://github.com/'
              displayText='GitHub' />
            <LinkToSNSProfile
              userId={medium}
              url='https://medium.com/@'
              displayText='Medium' />
          </div>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`;
export default SocialBar;
