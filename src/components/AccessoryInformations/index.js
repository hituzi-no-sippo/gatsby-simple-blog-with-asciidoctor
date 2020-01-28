import React from 'react';
import PropTypes from 'prop-types';

import { DisqusCommentCount } from 'components/Disqus';

import { formatDate } from 'utils/i18n';
import { formatReadingTime } from 'utils/helpers';
import Author from './Author';

const AccessoryInformations = ({dateStr, timeToRead, disqus, author}) => {
  const separatorMark = ` • `;

  return (
    <>
      <Author {...author} />
      {formatDate(dateStr) + separatorMark + formatReadingTime(timeToRead)}
      <DisqusCommentCount
        identifier={disqus.id}
        title={disqus.title}
        slug={disqus.slug}
        show={disqus.show}
        prefix={separatorMark}
      />
    </>
  );
};

AccessoryInformations.propTypes = {
  dateStr: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  disqus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
};

export default AccessoryInformations;
