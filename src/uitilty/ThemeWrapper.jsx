import React, { useState } from 'react';

const ThemeWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

export default ThemeWrapper;