import React from 'react';
import Helmet from 'react-helmet';

import withThemeFlag from 'utils/withThemeFlag';
import Toggle from '../../Toggle';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

// eslint-disable-next-line react/prop-types
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
            checked: <IconMoon fill="#f0c420"/>,
            unchecked: <IconSun fill="#ef8e38"/>,
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

export default withThemeFlag(ReadModeToggle);
