import React from 'react';
import PropTypes from 'prop-types';

import { DisqusCommentCount } from 'components/Disqus';

import { formatDate } from 'utils/i18n';
import { formatReadingTime } from 'utils/helpers';

const AccessoryInformations = ({dateStr, timeToRead, disqus}) => {
  const separatorMark = ` • `;

  return (
    <>
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
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    show: PropTypes.bool,
  }).isRequired
};

export default AccessoryInformations;
