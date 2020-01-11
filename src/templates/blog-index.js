import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allAsciidoc.edges;

  const { lang, homeLink } = useLang();


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={formatMessage('tIndTitle')} keywords={formatMessage('taIndKeywords')} />
      <aside>
        <Bio />
      </aside>
      <h4>
        {formatMessage('tfIndCountPosts', data.allAsciidoc.totalCount)}
        {' • '}
        <Link to={`${homeLink}tags/`}>{formatMessage('tfTagsLink')}</Link>
      </h4>
      {posts.map(({ node }) => {
        const title = node.document.title || node.fields.slug;
        return (
          <PostAbbrev
            lang={lang}
            base={homeLink}
            key={node.fields.slug}
            slug={node.fields.slug}
            date={node.revision.date}
            timeToRead={node.timeToRead}
            title={title}
            excerpt={node.document.description}
            tags={node.pageAttributes.tags}
          />
        );
      })}
    </Layout>
  );
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

BlogIndex.defaultProps = {};

export default BlogIndex;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allAsciidoc(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [revision___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          fields {
            slug
            langKey
          }
          document {
             title
             description
          }
          revision {
            date(formatString: "MMMM DD, YYYY")
          }
          pageAttributes {
            tags
          }
        }
      }
    }
  }
`;
