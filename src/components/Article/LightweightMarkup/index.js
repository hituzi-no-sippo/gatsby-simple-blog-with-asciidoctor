import React from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/v4-shims.min.css';

import './scss/common.scss'
import './scss/light.scss'
import './scss/dark.scss'

const LightWeightMarkup = ({html}) => {
  return <div className='content' dangerouslySetInnerHTML={{ __html: html }} />
}

LightWeightMarkup.propTypes = {
  html: PropTypes.string.isRequired,
};

export default LightWeightMarkup;
