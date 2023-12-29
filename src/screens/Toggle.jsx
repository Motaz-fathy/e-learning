import React, { useEffect, useState } from 'react';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      <button onClick={toggleTheme} className=" ">
        <span className='dark:text-white' >{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  );
};

export default Toggle;