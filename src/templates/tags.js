import React from 'react';
import PropTypes from 'prop-types';

import { kebabCase } from 'utils/helpers';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Tag from 'components/Tag';
import Bio from 'components/Bio';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import { location as locationPropTypes } from 'utils/propTypes';

const TagsPage = ({
  data: {
    allAsciidoc: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const { homeLink } = useLang();
  const tTags = formatMessage('tTags');

  return (
    <Layout
      pathname={location.pathname}
      title={title}
      breadcrumbs={[{ text: tTags }]}
    >
      <aside>
        <Bio />
      </aside>
      <Helmet title={tTags} />
      <div>
        <h1>{tTags}</h1>
        <div style={{ marginLeft: '1.5rem', lineHeight: 3, }}>
          {group.map(tag => (
            <Tag
              key={tag.fieldValue}
              text={tag.fieldValue}
              count={tag.totalCount}
              url={`${homeLink}tags/${kebabCase(tag.fieldValue)}/`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allAsciidoc: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: locationPropTypes.isRequired,
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsTotalPage($langKey: String) {
    site {
      siteMetadata {
        title
        lang
      }
    }
    allAsciidoc(limit: 1000, filter: { fields: { langKey: { eq: $langKey } } }) {
      group(field: pageAttributes___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
