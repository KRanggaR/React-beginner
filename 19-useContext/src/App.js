import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Content from './Content';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;