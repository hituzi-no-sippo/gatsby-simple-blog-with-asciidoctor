import './TagList.css';

import React from 'react';
import PropTypes from 'prop-types';

import { kebabCase } from 'utils/helpers';

import Tag from '../Tag';

function TagList({ tags, baseUrl, ...restProps }) {
  return (
    <ul className="tag-ul" {...restProps}>
      {tags.map(text => (
        <li key={text}>
          <Tag text={text} url={`${baseUrl}/${kebabCase(text)}/`} />
        </li>
      ))}
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default TagList;
