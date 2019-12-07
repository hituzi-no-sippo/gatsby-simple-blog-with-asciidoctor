import React from 'react';
import PropTypes from 'prop-types';


const ProfileLinkOnSNS = ({userId, url, displayText})  => {
  return userId ?
    (
      <a
      href={url + userId}
      target="_blank"
      rel="noopener noreferrer"
      >
      {displayText}
      </a>
    ):
    null;
}

ProfileLinkOnSNS.propTypes ={
  userId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
}

export default ProfileLinkOnSNS;
