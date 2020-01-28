import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import BlogAuthorLink from 'components/BlogAuthorLink';

import { rhythm } from 'utils/typography';

import { author } from 'config'

const ProfilePicture = ({picture}) => {
  return (
    <BlogAuthorLink>
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
    </BlogAuthorLink>
  )
};

ProfilePicture.propTypes = {
  picture: PropTypes.object.isRequired,
};

export default ProfilePicture;
