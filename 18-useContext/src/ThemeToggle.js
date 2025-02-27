import React from 'react';
import './styles.css'
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handlePress = () => {
    toggleTheme();
  };
  return (

    <div className='container-box'
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#F9F9F9",
      }}
    >
      <div className="Button-box">

        <p
          style={{
            color: isDarkMode ? "#FFF" : "#000",
          }}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </p>
        <button style={{ padding: 10 }} onClick={handlePress}>
          <p>Toggle Theme</p>
        </button>
      </div>
    </div>

  );
}

export default ThemeToggle;