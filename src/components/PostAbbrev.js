import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import AccessoryInformations from 'components/AccessoryInformations';

import { rhythm } from 'utils/typography';

import TagList from './TagList';

function PostAbbrev({
  slug,
  title,
  dateStr,
  timeToRead,
  excerpt,
  tags,
  base,
  id,
  showDisqus,
  author,
}) {
  let excerptPart;
  if (excerpt) {
    excerptPart = (
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
    );
  }

  let tagsPart;
  if (tags) {
    tagsPart = (
      <TagList
        style={{ margin: '0.5rem 0 -0.5rem -0.5rem' }}
        tags={tags}
        baseUrl={`${base}tags`}
      />
    );
  }

  return (
    <article>
      <header>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: rhythm(1),
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: 'none' }} to={slug} rel="bookmark">
            {title}
          </Link>
        </h3>
        <small>
          <AccessoryInformations
            dateStr={dateStr}
            timeToRead={timeToRead}
            disqus={{
              id,
              title,
              slug,
              show: showDisqus,
            }}
            author={author}
          />
        </small>
        {tagsPart}
        {excerptPart}
      </header>
    </article>
  );
}

PostAbbrev.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateStr: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.array,
  base: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  showDisqus: PropTypes.bool.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
};

PostAbbrev.defaultProps = {
  excerpt: null,
  tags: null,
};

export default PostAbbrev;
