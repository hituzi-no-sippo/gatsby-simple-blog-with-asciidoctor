import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/i18n';
import { formatReadingTime } from 'utils/helpers';

const SEPARATOR_MARK = ` • `;

const AccessoryInformations = ({date, time}) => {
  return (
    <>
      {formatDate(date) + SEPARATOR_MARK + formatReadingTime(time)}
    </>
  );
};

AccessoryInformations.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default AccessoryInformations;
