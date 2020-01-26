import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import { formatMessage } from 'utils/i18n';
import { location as locationPropTypes } from 'utils/propTypes';

function BlogIndex({ data, location, pageContext }) {
  return (
    <Layout pathname={location.pathname} title={data.site.siteMetadata.title}>
      <SEO
        title={formatMessage('tIndTitle')}
        keywords={formatMessage('taIndKeywords')}
        slug={pageContext.slug}
      />
      <aside>
        <Bio />
      </aside>
      <h4>
        {formatMessage('tfIndCountPosts', data.allAsciidoc.totalCount)}
        {' • '}
        <Link to={`${pageContext.slug}tags/`}>
          {formatMessage('tfTagsLink')}
        </Link>
      </h4>
      {// eslint-disable-next-line react/prop-types
       data.allAsciidoc.edges.map(({ node }) => {
        const title = node.document.title || node.fields.slug;
        return (
          <PostAbbrev
            lang={pageContext.langKey}
            base={pageContext.slug}
            key={node.fields.slug}
            slug={node.fields.slug}
            dateStr={node.revision.date}
            timeToRead={node.timeToRead}
            title={title}
            excerpt={node.document.description}
            tags={node.pageAttributes.tags}
            id={node.id}
            showDisqus={node.pageAttributes.disqus !== false}
            author={{
              name: node.author.fullName,
              url: node.pageAttributes.author_url,
              twitter: node.pageAttributes.author_twitter,
            }}
          />
        );
      })}
    </Layout>
  );
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    }).isRequired,
    allAsciidoc: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          timeToRead: PropTypes.number.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          author: PropTypes.shape({
            fullName: PropTypes.string.isRequired,
          }).isRequired,
          document: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string
          }).isRequired,
          revision: PropTypes.shape({
            date: PropTypes.string.isRequired,
          }).isRequired,
          pageAttributes: PropTypes.shape({
            tags: PropTypes.arrayOf(PropTypes.string),
            disqus: PropTypes.bool,
            author_twitter: PropTypes.string,
            author_url: PropTypes.string,
          }).isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  location: locationPropTypes.isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

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
          id
          timeToRead
          fields {
            slug
          }
          author {
            fullName
          }
          document {
             title
             description
          }
          revision {
            date
          }
          pageAttributes {
            tags
            disqus
            author_twitter
            author_url
          }
        }
      }
    }
  }
`;
