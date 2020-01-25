/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { rhythm } from 'utils/typography';
import ProfilePicture from './ProfilePicture';
import Links from './Links';

import './Bio.css';

function Bio() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={bioQuery}
      render={data => {
        const { description } = data.site.siteMetadata;
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="bio">
              <ProfilePicture
                picture={data.avatar}
              />
              <div className="description">
                <p>{description}</p>
                <Links />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Bio;
