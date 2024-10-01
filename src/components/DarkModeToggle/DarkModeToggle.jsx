import { useEffect, useState } from 'react';
import './DarkModeToggle.css'; // We’ll add some CSS for the switch later.

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
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
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default DarkModeToggle;