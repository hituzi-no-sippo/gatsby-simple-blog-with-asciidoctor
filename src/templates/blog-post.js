import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import RelativePosts from 'components/RelativePosts';
import { DisqusEmbed } from 'components/Disqus';
import Article from 'components/Article';

import { rhythm } from 'utils/typography';
import { useLang } from 'context/LanguageContext';

function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.asciidoc;
  const { previous, next, previousInSameTag, nextInSameTag, translationsLink } = pageContext;
  const languageContexts = useLang();

  return (
    <Layout
      location={location}
      title={data.site.siteMetadata.title}
      breadcrumbs={[{ text: post.document.title }]}
    >
      <SEO
        title={post.document.title}
        description={post.document.description}
        slug={pageContext.slug}
        articleAuthor={{
          name: post.author.fullName,
          twitter: post.pageAttributes.author_twitter,
        }}
      />
      <Article
        article={post}
        slug={pageContext.slug}
        translationsLink={translationsLink}
        languageContexts={languageContexts}
      />

      <RelativePosts
       postNodes={[previousInSameTag, nextInSameTag]}
       lang={languageContexts.lang} />

      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
          marginLeft: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.document.title}
            </Link>
          )}
        </li>
        <li><Link to={`${languageContexts.homeLink}`}>HOME</Link></li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.document.title} →
            </Link>
          )}
        </li>
      </ul>

      <DisqusEmbed
        identifier={post.id}
        show={post.pageAttributes.disqus !== false}
        title={post.document.title}
        slug={pageContext.slug} />
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        lang
      }
    }
    asciidoc(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      internal {
        type
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
      paths {
        from {
          source {
            full
          }
        }
      }
    }
  }
`;
