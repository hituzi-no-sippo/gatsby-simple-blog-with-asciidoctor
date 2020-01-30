/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import Bio from 'components/Bio';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allAsciidoc;
  const siteTitle = data.site.siteMetadata.title;

  const { lang, homeLink } = useLang();

  const tagHeader = formatMessage('tfTagHeader', totalCount, tag);

  return (
    <Layout
      pathname={location.pathname}
      title={siteTitle}
      breadcrumbs={[
        { text: formatMessage('tTags'), url: `${homeLink}tags` },
        { text: tag }
      ]}
    >
      <SEO title={tagHeader} description={tagHeader} slug={pageContext.slug} />
      <h1>{tagHeader}</h1>
      <main>
        {edges.map(({ node }) => {
          const title = node.document.title || node.fields.slug;
          return (
            <PostAbbrev
              key={node.fields.slug}
              base={homeLink}
              lang={lang}
              slug={node.fields.slug}
              dateStr={node.revision.date}
              timeToRead={node.timeToRead}
              title={title}
              excerpt={node.document.description}
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
      </main>
      <div style={{ marginTop: 50 }} />
      <aside>
        <Bio />
      </aside>
    </Layout>
  );
};

TagPageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    langKey: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allAsciidoc: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
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
              description: PropTypes.string,
            }).isRequired,
            revision: PropTypes.shape({
              date: PropTypes.string.isRequired,
            }).isRequired,
            pageAttributes: PropTypes.shape({
              disqus: PropTypes.bool,
              author_twitter: PropTypes.string,
              author_url: PropTypes.string,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String, $langKey: String) {
    site {
      siteMetadata {
        title
      }
    }
    allAsciidoc(
      limit: 1000
      sort: { fields: [revision___date], order: DESC }
      filter: { pageAttributes: { tags: { in: [$tag] } }, fields: { langKey: { eq: $langKey } } }
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
            disqus
            author_twitter
            author_url
          }
        }
      }
    }
  }
`;
