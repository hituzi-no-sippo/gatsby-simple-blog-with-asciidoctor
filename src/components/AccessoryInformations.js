import React from 'react';
import PropTypes from 'prop-types';

import { DisqusCommentCount } from 'components/Disqus';

import { formatDate } from 'utils/i18n';
import { formatReadingTime } from 'utils/helpers';

const SEPARATOR_MARK = ` • `;

const AccessoryInformations = ({date, time, disqus}) => {
  return (
    <>
      {formatDate(date) + SEPARATOR_MARK + formatReadingTime(time)}
      <DisqusCommentCount
        identifier={disqus.id}
        title={disqus.title}
        slug={disqus.slug}
        show={disqus.show}
        prefix={SEPARATOR_MARK}
      />
    </>
  );
};

AccessoryInformations.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  disqus: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    show: PropTypes.bool,
  }).isRequired
};

export default AccessoryInformations;
