import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withThemeFlag from 'utils/withThemeFlag';
import Toggle from './Toggle';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

function ReadModeToggle({ isLightTheme }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: isLightTheme ? '#ffa8c5' : '#282c35',
          },
        ]}
      />
      {isLightTheme != null ? (
        <Toggle
          icons={{
            checked: <IconMoon />,
            unchecked: <IconSun />,
          }}
          checked={!isLightTheme}
          onChange={e => window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')}
        />
      ) : (
        <div style={{ height: '24px' }} />
      )}
    </>
  );
}

ReadModeToggle.propTypes = {
  isLightTheme: PropTypes.bool,
};

ReadModeToggle.defaultProps = {
  isLightTheme: null,
};

export default withThemeFlag(ReadModeToggle);
