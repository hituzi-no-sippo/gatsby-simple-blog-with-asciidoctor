import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import { rhythm } from 'utils/typography';

import { author } from 'config'

const ProfilePicture = ({picture}) => {
  const Picture =
    <Image
      fixed={picture.childImageSharp.fixed}
      alt={author.name}
      className="pic"
      style={{
        marginRight: rhythm(1 / 2),
      }}
      imgStyle={{
        borderRadius: '50%',
      }}
    />

  return typeof author.url === 'string'
    ? <a href={author.url}
        target="_blank"
        rel="author external noopener noreferrer">
        {Picture}
      </a>
    : <>{Picture}</>
};

ProfilePicture.propTypes = {
  picture: PropTypes.object.isRequired,
};

export default ProfilePicture;
