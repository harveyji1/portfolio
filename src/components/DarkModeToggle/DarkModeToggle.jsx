import { useEffect, useState } from 'react';
import './DarkModeToggle.css';
import {CiLight, CiDark} from "react-icons/ci";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.remove('dark-mode');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme and store the user's preference
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="theme-switch">
      <CiLight className={`icon sun-icon ${isDarkMode ? "active" : "inactive"}`} />
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider"></span>
      <CiDark className={`icon moon-icon ${isDarkMode ? "active" : "active"}`} />
    </label>
  );
};

export default DarkModeToggle;