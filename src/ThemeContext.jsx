import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext([{}, () => {}]);

export const ThemeContextProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState('dark');

  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = { children: PropTypes.element.isRequired };
