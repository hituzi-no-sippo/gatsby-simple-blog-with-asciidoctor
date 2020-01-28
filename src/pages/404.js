import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { formatMessage } from "../utils/i18n";
import { location as locationPropTypes } from '../utils/propTypes';

function NotFoundPage({ data, location }) {
  return (
    <Layout pathname={location.pathname} title={data.site.siteMetadata.title}>
      <SEO title={formatMessage('t404Title')} />
      <h1>{formatMessage('t404Title')}</h1>
      <p>{formatMessage('t404Content')}</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: locationPropTypes.isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
