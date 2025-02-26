import React from 'react';
import { useTheme } from './ThemeContext';
import './styles.css';

function Content() {
  const { isDark } = useTheme();
  
  return (
    <div className={`content ${isDark ? 'content-dark' : 'content-light'}`}>
      <h1>Hello, this is {isDark ? 'Dark' : 'Light'} Mode</h1>
      <p>This content changes styles based on the current theme.</p>
    </div>
  );
}

export default Content;